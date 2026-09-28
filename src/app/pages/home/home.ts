import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  inject
} from '@angular/core';

import {
  AccessService
} from '../../core/services/access';


interface Sleuth {
  id: string;
  username: string;
  displayName: string;
  initials: string;
  role: string;
  status: string;
}


interface ChatMessage {
  id: number;
  sender: 'system' | 'sleuth' | 'player';
  sleuthId?: string;
  text: string;
  timestamp: string;
}


interface ScriptedMessage {
  sleuthId: string;
  text: string;
  delay?: number;
}


type ConversationStage =
  | 'opening'
  | 'awaiting-introduction'
  | 'emily-background'
  | 'development-background'
  | 'development-theory'
  | 'awaiting-council-task'
  | 'unlocking'
  | 'complete';


interface PersistedChatState {
  messages: ChatMessage[];
  playerMessage: string;
  conversationStage: ConversationStage;
  conversationStarted: boolean;
  nextMessageId: number;
}


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent
  implements OnInit, OnDestroy {

  private accessService =
    inject(AccessService);

  private changeDetector =
    inject(ChangeDetectorRef);


  @ViewChild('messageList')
  private messageList?: ElementRef<HTMLElement>;


  /*
   * ============================================================
   * PERSISTENCE
   * ============================================================
   */

  private readonly refreshKey =
  'case-files-home-refresh';

  private readonly storageKey =
    'case-files-home-chat-v3';


  /*
   * ============================================================
   * NPCS
   * ============================================================
   */

  readonly sleuths: Sleuth[] = [

    {
      id: 'jonah',
      username: 'jonah',
      displayName: 'Jonah',
      initials: 'J',
      role: 'THE FACT FINDER',
      status: 'online'
    },

    {
      id: 'mara',
      username: 'mara',
      displayName: 'Mara',
      initials: 'M',
      role: 'THE THEORIST',
      status: 'online'
    },

    {
      id: 'riley',
      username: 'riley',
      displayName: 'Riley',
      initials: 'R',
      role: 'THE WEB WIZARD',
      status: 'online'
    }

  ];


  /*
   * ============================================================
   * CHAT STATE
   * ============================================================
   */

  messages: ChatMessage[] = [];

  playerMessage = '';

  typingMessage = '';

  typingSleuthId: string | null = null;

  isTyping = false;

  canPlayerRespond = false;


  conversationStage:
    ConversationStage = 'opening';


  private conversationStarted = false;

  private nextMessageId = 1;


  /*
   * ============================================================
   * TIMING
   * ============================================================
   *
   * 64 WPM is approximately 30% faster than the previous
   * 45 WPM baseline.
   */

  private readonly npcTypingWpm = 300;

  private typingTimer:
    ReturnType<typeof setTimeout> | null = null;

  private responseTimers:
    ReturnType<typeof setTimeout>[] = [];


  /*
   * ============================================================
   * SCROLL STATE
   * ============================================================
   *
   * Auto-scroll remains active while the player is at or near
   * the bottom of the conversation.
   *
   * If the player manually scrolls upward, auto-scroll pauses.
   */

  private shouldAutoScroll = true;


  /*
   * ============================================================
   * LIFECYCLE
   * ============================================================
   */

  ngOnInit(): void {
    this.initializeSession();

    const restored =
      this.restoreConversation();

    if (restored) {

      this.changeDetector.detectChanges();


      /*
       * Restored conversations should open at the most
       * recent messages rather than the beginning.
       */

      this.shouldAutoScroll = true;

      this.scheduleScrollToBottom();


      if (this.canPlayerRespond) {
        this.focusComposer();
      }


      return;
    }


    if (this.conversationStarted) {
      return;
    }


    this.conversationStarted = true;


    this.addMessage({

      sender: 'system',

      text:
        'New member joined the investigation.',

      timestamp:
        this.getCurrentTime()

    });


    this.saveConversation();


    this.changeDetector.detectChanges();


    const timer =
      setTimeout(() => {

        this.playOpeningConversation();

        this.changeDetector.detectChanges();

      }, 900);


    this.responseTimers.push(timer);

  }


  ngOnDestroy(): void {

    this.stopTyping();


    for (
      const timer of this.responseTimers
    ) {

      clearTimeout(timer);

    }


    this.responseTimers = [];


    this.saveConversation();

  }


  /*
   * ============================================================
   * PLAYER INPUT
   * ============================================================
   */

  sendMessage(): void {

    if (
      !this.canPlayerRespond ||
      this.isTyping
    ) {

      return;

    }


    const message =
      this.playerMessage.trim();


    if (!message) {
      return;
    }


    this.addMessage({

      sender: 'player',

      text: message,

      timestamp:
        this.getCurrentTime()

    });


    this.playerMessage = '';

    this.canPlayerRespond = false;

    this.saveConversation();


    this.changeDetector.detectChanges();


    this.scheduleScrollToBottom();


    this.advanceConversation();

  }


  handleKeydown(
    event: KeyboardEvent
  ): void {

    if (
      event.key === 'Enter' &&
      !event.shiftKey
    ) {

      event.preventDefault();

      this.sendMessage();

    }

  }


  /*
   * ============================================================
   * DISPLAY HELPERS
   * ============================================================
   */

  getSleuth(
    id: string
  ): Sleuth | undefined {

    return this.sleuths.find(
      sleuth =>
        sleuth.id === id
    );

  }


  getSleuthName(
    id: string
  ): string {

    return (
      this.getSleuth(id)
        ?.displayName ??
      'Unknown'
    );

  }


  getSleuthInitials(
    id: string
  ): string {

    return (
      this.getSleuth(id)
        ?.initials ??
      '?'
    );

  }


  /*
   * ============================================================
   * OPENING
   * ============================================================
   */

  private playOpeningConversation(): void {

    this.conversationStage =
      'opening';


    const messages: ScriptedMessage[] = [

      {
        sleuthId: 'riley',

        text:
          'Hey. We have a new person in here.'
      },

      {
        sleuthId: 'mara',

        text:
          'Oh. Hey.'
      },

      {
        sleuthId: 'jonah',

        text:
          'Hi.'
      },

      {
        sleuthId: 'riley',

        text:
          'We are all looking into Emily Carter. If that is what brought you here, you are in the right place.'
      },

      {
        sleuthId: 'mara',

        text:
          'We have been circling this one for a while.'
      },

      {
        sleuthId: 'riley',

        text:
          'You wanna help us dig around on this?'
      }

    ];


    this.playMessagesSequentially(
      messages,
      () => {

        this.conversationStage =
          'awaiting-introduction';


        this.canPlayerRespond = true;


        this.saveConversation();


        this.changeDetector.detectChanges();


        this.focusComposer();

      }
    );

  }


  /*
   * ============================================================
   * CONVERSATION ADVANCEMENT
   * ============================================================
   */

  private advanceConversation(): void {

    switch (
      this.conversationStage
    ) {

      case 'awaiting-introduction':

        this.playEmilyBackground();

        break;


      case 'awaiting-council-task':

        this.beginPublicAccessUnlock();

        break;


      default:

        break;

    }

  }


  /*
   * ============================================================
   * EMILY BACKGROUND
   * ============================================================
   */

  private playEmilyBackground(): void {

    this.conversationStage =
      'emily-background';


    const messages: ScriptedMessage[] = [

      {
        sleuthId: 'jonah',

        text:
          'I can give you the short version of what I found.'
      },

      {
        sleuthId: 'jonah',

        text:
          'Emily Carter was twenty-seven when she disappeared in October 2024.'
      },

      {
        sleuthId: 'jonah',

        text:
          'She grew up in Warrenton, Virginia, went to Virginia Tech, and studied environmental science.'
      },

      {
        sleuthId: 'jonah',

        text:
          'After college she went to work as an environmental scientist for the Commonwealth.'
      },

      {
        sleuthId: 'jonah',

        text:
          'She had been there about three years when she came to Amherst.'
      },

      {
        sleuthId: 'mara',

        text:
          'And this was not some routine inspection.'
      },

      {
        sleuthId: 'jonah',

        text:
          'Right. It looks like this was her first major assignment that she was actually spearheading.'
      },

      {
        sleuthId: 'jonah',

        text:
          'She had been in Amherst for several weeks.'
      },

      {
        sleuthId: 'jonah',

        text:
          'From everything I found, she was excited about it. A little nervous too, but this was basically the career she wanted.'
      },

      {
        sleuthId: 'riley',

        text:
          'So why Amherst?'
      },

      {
        sleuthId: 'jonah',

        text:
          'That part gets interesting.'
      }

    ];


    this.playMessagesSequentially(
      messages,
      () => {

        this.playDevelopmentBackground();

      }
    );

  }


  /*
   * ============================================================
   * DEVELOPMENT BACKGROUND
   * ============================================================
   */

  private playDevelopmentBackground(): void {

    this.conversationStage =
      'development-background';


    const messages: ScriptedMessage[] = [

      {
        sleuthId: 'jonah',

        text:
          'She was reviewing the environmental side of a proposed manufacturing development outside town.'
      },

      {
        sleuthId: 'jonah',

        text:
          'Blue Ridge Advanced Materials was proposing a specialty plastics facility.'
      },

      {
        sleuthId: 'jonah',

        text:
          'It was not a tiny project. New production space, a warehouse, loading areas, parking, access roads, and a pretty substantial amount of land clearing.'
      },

      {
        sleuthId: 'mara',

        text:
          'Which is where I start getting interested.'
      },

      {
        sleuthId: 'jonah',

        text:
          'The project had legitimate economic arguments. Jobs, tax revenue, investment, all the usual stuff.'
      },

      {
        sleuthId: 'jonah',

        text:
          'But Emily found environmental concerns that were harder to dismiss.'
      },

      {
        sleuthId: 'jonah',

        text:
          'The wetlands and intermittent waterways looked more extensive than the developer\'s assessment suggested.'
      },

      {
        sleuthId: 'jonah',

        text:
          'She was also looking at stormwater runoff and the potential water-quality issues from an industrial site.'
      },

      {
        sleuthId: 'mara',

        text:
          'And that is where I think the story starts.'
      },

      {
        sleuthId: 'jonah',

        text:
          'Careful.'
      },

      {
        sleuthId: 'mara',

        text:
          'I know. We do not have proof.'
      },

      {
        sleuthId: 'jonah',

        text:
          'Exactly.'
      }

    ];


    this.playMessagesSequentially(
      messages,
      () => {

        this.playDevelopmentTheory();

      }
    );

  }


  /*
   * ============================================================
   * DEVELOPMENT THEORY
   * ============================================================
   */

  private playDevelopmentTheory(): void {

    this.conversationStage =
      'development-theory';


    const messages: ScriptedMessage[] = [

      {
        sleuthId: 'mara',

        text:
          'I think the developers had something to do with her disappearance.'
      },

      {
        sleuthId: 'jonah',

        text:
          'Based on what?'
      },

      {
        sleuthId: 'mara',

        text:
          'Emily is working on an assessment that could complicate a major development. Then she disappears.'
      },

      {
        sleuthId: 'jonah',

        text:
          'That gives you a motive to investigate. It does not give you a suspect.'
      },

      {
        sleuthId: 'mara',

        text:
          'Fair.'
      },

      {
        sleuthId: 'jonah',

        text:
          'There are also other people involved in the development who we have not looked at closely enough.'
      },

      {
        sleuthId: 'mara',

        text:
          'Which is exactly why I think we should start digging into the town itself.'
      },

      {
        sleuthId: 'riley',

        text:
          'Good. Because I can get you into the places where that digging actually starts.'
      },

      {
        sleuthId: 'riley',

        text:
          'There are old Amherst town-council records that predate Emily by months. I can get you to the public sources.'
      },

      {
        sleuthId: 'riley',

        text:
          'Can you dig into those older meetings and see what was happening before Emily arrived?'
      }

    ];


    this.playMessagesSequentially(
      messages,
      () => {

        this.conversationStage =
          'awaiting-council-task';


        this.canPlayerRespond = true;


        this.saveConversation();


        this.changeDetector.detectChanges();


        this.focusComposer();

      }
    );

  }


  /*
   * ============================================================
   * PUBLIC ACCESS UNLOCK SEQUENCE
   * ============================================================
   *
   * Player responds to the council-record task.
   *
   * 1. Pause
   * 2. Riley says she is unlocking access
   * 3. Pause
   * 4. Public access actually unlocks
   * 5. Pause
   * 6. Riley confirms access
   * 7. Pause
   * 8. Jonah tells the player to report back
   */

  private beginPublicAccessUnlock(): void {

    this.conversationStage =
      'unlocking';


    this.saveConversation();


    const initialPause =
      setTimeout(() => {

        this.typeNpcMessage(
          'riley',

          'Okay. I am unlocking it for you now.',

          () => {

            const unlockPause =
              setTimeout(() => {

                this.accessService
                  .unlockPublicAccess();


                this.addMessage({

                  sender: 'system',

                  text:
                    'AMHERST PUBLIC ACCESS UNLOCKED',

                  timestamp:
                    this.getCurrentTime()

                });


                this.saveConversation();


                this.changeDetector.detectChanges();


                this.scheduleScrollToBottom();


                const confirmationPause =
                  setTimeout(() => {

                    this.typeNpcMessage(
                      'riley',

                      'Okay. You should have access now.',

                      () => {

                        const finalPause =
                          setTimeout(() => {

                            this.typeNpcMessage(
                              'jonah',

                              'Let us know what you find.',

                              () => {

                                this.conversationStage =
                                  'complete';


                                this.saveConversation();

                              }

                            );

                          }, 750);


                        this.responseTimers.push(
                          finalPause
                        );

                      }

                    );

                  }, 675);


                this.responseTimers.push(
                  confirmationPause
                );

              }, 900);


            this.responseTimers.push(
              unlockPause
            );

          }

        );

      }, 900);


    this.responseTimers.push(
      initialPause
    );

  }


  /*
   * ============================================================
   * SCRIPTED MESSAGE PLAYER
   * ============================================================
   */

  private playMessagesSequentially(
    messages: ScriptedMessage[],
    onComplete: () => void
  ): void {

    /*
     * Consolidate Jonah's consecutive one-line messages before
     * playback.
     *
     * 3-4 consecutive Jonah messages -> 2 messages
     * 5+ consecutive Jonah messages -> 3 messages
     */

    const normalizedMessages =
      this.consolidateJonahMessages(messages);


    let index = 0;


    const playNext = (): void => {

      if (
        index >= normalizedMessages.length
      ) {

        onComplete();

        return;

      }


      const message =
        normalizedMessages[index];


      index++;


      const initialDelay =
        message.delay ?? 900;


      const timer =
        setTimeout(() => {

          this.typeNpcMessage(

            message.sleuthId,

            message.text,

            () => {

              const pause =
                this.getConversationPause(
                  message.text
                );


              const nextTimer =
                setTimeout(
                  playNext,
                  pause
                );


              this.responseTimers.push(
                nextTimer
              );

            }

          );

        }, initialDelay);


      this.responseTimers.push(
        timer
      );

    };


    playNext();

  }


  /*
   * ============================================================
   * JONAH MESSAGE CONSOLIDATION
   * ============================================================
   *
   * Jonah often has several short factual messages in a row.
   * Consolidating them keeps the conversation feeling like a
   * real chat rather than a sequence of individual fact drops.
   */

  private consolidateJonahMessages(
    messages: ScriptedMessage[]
  ): ScriptedMessage[] {

    const result: ScriptedMessage[] = [];

    let index = 0;


    while (
      index < messages.length
    ) {

      const message =
        messages[index];


      if (
        message.sleuthId !== 'jonah'
      ) {

        result.push(message);

        index++;

        continue;

      }


      const run: ScriptedMessage[] = [];


      while (
        index < messages.length &&
        messages[index].sleuthId === 'jonah'
      ) {

        run.push(
          messages[index]
        );

        index++;

      }


      if (run.length < 3) {

        result.push(
          ...run
        );

        continue;

      }


      const targetCount =
        run.length <= 4
          ? 2
          : 3;


      const chunkSizes =
        this.getChunkSizes(
          run.length,
          targetCount
        );


      let runIndex = 0;


      for (
        const chunkSize of chunkSizes
      ) {

        const chunk =
          run.slice(
            runIndex,
            runIndex + chunkSize
          );


        runIndex += chunkSize;


        result.push({

          sleuthId: 'jonah',

          text:
            chunk
              .map(
                message =>
                  message.text
              )
              .join(' ')

        });

      }

    }


    return result;

  }


  private getChunkSizes(
    total: number,
    chunks: number
  ): number[] {

    const base =
      Math.floor(
        total / chunks
      );


    const remainder =
      total % chunks;


    return Array.from(
      {
        length: chunks
      },
      (_, index) =>
        base +
        (index < remainder ? 1 : 0)
    );

  }


  /*
   * ============================================================
   * NPC TYPING
   * ============================================================
   *
   * Previous baseline: 45 WPM.
   *
   * Current baseline: 64 WPM.
   *
   * This is approximately 30% faster while still retaining
   * the typing-indicator behavior.
   */

  private typeNpcMessage(
    sleuthId: string,
    text: string,
    onComplete?: () => void
  ): void {

    this.stopTyping();


    this.isTyping = true;

    this.typingSleuthId =
      sleuthId;

    this.typingMessage = '';


    this.changeDetector.detectChanges();


    /*
     * Keep the conversation pinned while the NPC is typing.
     */

    this.scheduleScrollToBottom();


    const typingDuration =
      this.getTypingDuration(text);


    this.typingTimer =
      setTimeout(() => {

        this.typingTimer = null;


        this.stopTyping();


        this.addMessage({

          sender: 'sleuth',

          sleuthId,

          text,

          timestamp:
            this.getCurrentTime()

        });


        this.saveConversation();


        this.changeDetector.detectChanges();


        this.scheduleScrollToBottom();


        if (onComplete) {
          onComplete();
        }

      }, typingDuration);

  }


  private getTypingDuration(
    text: string
  ): number {

    const characterCount =
      text.length;


    const words =
      characterCount / 5;


    const minutes =
      words / this.npcTypingWpm;


    const typingMilliseconds =
      minutes * 60_000;


    return Math.max(
      900,
      Math.round(
        typingMilliseconds + 500
      )
    );

  }


  /*
   * ============================================================
   * CONVERSATION PAUSES
   * ============================================================
   *
   * These are approximately 25% shorter than the previous
   * values.
   */

  private getConversationPause(
    text: string
  ): number {

    if (
      text.endsWith('?')
    ) {

      return 1350;

    }


    if (
      text.length < 25
    ) {

      return 560;

    }


    if (
      text.length > 160
    ) {

      return 900;

    }


    return 710;

  }


  /*
   * ============================================================
   * COMPOSER FOCUS
   * ============================================================
   */

  private focusComposer(): void {

    const timer =
      setTimeout(() => {

        const input =
          document.querySelector(
            '.composer-row input'
          ) as HTMLInputElement | null;


        input?.focus();

      }, 100);


    this.responseTimers.push(timer);

  }


  /*
   * ============================================================
   * STOP TYPING
   * ============================================================
   */

  private stopTyping(): void {

    if (
      this.typingTimer !== null
    ) {

      clearTimeout(
        this.typingTimer
      );

      this.typingTimer = null;

    }


    this.isTyping = false;

    this.typingMessage = '';

    this.typingSleuthId = null;


    this.changeDetector.detectChanges();

  }


  /*
   * ============================================================
   * MESSAGE HELPERS
   * ============================================================
   */

  private addMessage(
    message: Omit<ChatMessage, 'id'>
  ): void {

    this.messages.push({

      ...message,

      id:
        this.nextMessageId++

    });

  }


  /*
   * ============================================================
   * AUTO SCROLL
   * ============================================================
   */

  handleMessageListScroll(): void {

    const element =
      this.messageList?.nativeElement;


    if (!element) {
      return;
    }


    const distanceFromBottom =
      element.scrollHeight -
      element.scrollTop -
      element.clientHeight;


    /*
     * If the player is within 48px of the bottom, we consider
     * them to be following the conversation.
     */

    this.shouldAutoScroll =
      distanceFromBottom <= 48;

  }


  private scheduleScrollToBottom(): void {

    if (!this.shouldAutoScroll) {
      return;
    }


    setTimeout(() => {

      /*
       * Check again because the player may have manually
       * scrolled upward while the render was pending.
       */

      if (!this.shouldAutoScroll) {
        return;
      }


      const element =
        this.messageList?.nativeElement;


      if (!element) {
        return;
      }


      element.scrollTo({

        top:
          element.scrollHeight,

        behavior:
          'smooth'

      });

    }, 0);

  }


  /*
   * ============================================================
   * PERSISTENCE
   * ============================================================
   */

  saveConversation(): void {

    if (
      typeof window === 'undefined'
    ) {

      return;

    }


    const state:
      PersistedChatState = {

      messages:
        this.messages,

      playerMessage:
        this.playerMessage,

      conversationStage:
        this.conversationStage,

      conversationStarted:
        this.conversationStarted,

      nextMessageId:
        this.nextMessageId

    };


    try {

      window.sessionStorage.setItem(

        this.storageKey,

        JSON.stringify(state)

      );

    } catch {

      /*
       * Persistence failure should never prevent
       * the chat from functioning.
       */

    }

  }


  private restoreConversation(): boolean {

    if (
      typeof window === 'undefined'
    ) {

      return false;

    }


    try {

      const raw =
        window.sessionStorage.getItem(
          this.storageKey
        );


      if (!raw) {
        return false;
      }


      const state =
        JSON.parse(
          raw
        ) as PersistedChatState;


      if (
        !state ||
        !Array.isArray(state.messages)
      ) {

        return false;

      }


      this.messages =
        state.messages ?? [];


      this.playerMessage =
        state.playerMessage ?? '';


      this.conversationStage =
        state.conversationStage ??
        'opening';


      this.conversationStarted =
        state.conversationStarted ??
        false;


      this.nextMessageId =
        state.nextMessageId ??
        (
          this.messages.reduce(
            (
              highest,
              message
            ) =>
              Math.max(
                highest,
                message.id
              ),
            0
          ) + 1
        );


      this.canPlayerRespond =
        this.conversationStage ===
          'awaiting-introduction' ||
        this.conversationStage ===
          'awaiting-council-task';


      /*
       * Restored conversations should open at the current
       * bottom rather than leaving the player at the top.
       */

      this.shouldAutoScroll = true;


      return true;

    } catch {

      window.sessionStorage.removeItem(
        this.storageKey
      );


      return false;

    }

  }

  private initializeSession(): void {

    if (
      typeof window === 'undefined'
    ) {

      return;

    }


    const wasRefreshing =
      window.sessionStorage.getItem(
        this.refreshKey
      );


    if (wasRefreshing) {

      window.sessionStorage.removeItem(
        this.storageKey
      );

      window.sessionStorage.removeItem(
        this.refreshKey
      );

    }


    window.addEventListener(
      'beforeunload',
      () => {

        window.sessionStorage.setItem(
          this.refreshKey,
          'true'
        );

      },
      {
        once: true
      }
    );

  }


  /*
   * ============================================================
   * CURRENT TIME
   * ============================================================
   */

  private getCurrentTime(): string {

    return new Intl.DateTimeFormat(
      'en-US',
      {
        hour: 'numeric',
        minute: '2-digit'
      }
    ).format(
      new Date()
    );

  }

}