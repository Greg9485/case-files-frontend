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
  | 'case-introduction'
  | 'awaiting-case-response'
  | 'theories'
  | 'awaiting-theory-response'
  | 'investigation-invite'
  | 'awaiting-investigation-response'
  | 'public-access'
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

  private readonly storageKey =
    'case-files-home-chat';


  /*
   * ============================================================
   * SLEUTHS
   * ============================================================
   */

  readonly sleuths: Sleuth[] = [

    {
      id: 'mara',
      username: 'mara',
      displayName: 'Mara',
      initials: 'M',
      role: 'THE SKEPTIC',
      status: 'online'
    },

    {
      id: 'jonah',
      username: 'jonah',
      displayName: 'Jonah',
      initials: 'J',
      role: 'THE DIGGER',
      status: 'online'
    },

    {
      id: 'riley',
      username: 'riley',
      displayName: 'Riley',
      initials: 'R',
      role: 'THE PATTERN SEEKER',
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


  /*
   * These remain public because the existing template
   * references them.
   *
   * The actual message text is no longer progressively
   * rendered. The typing state is now used only to show
   * the typing indicator.
   */

  typingMessage = '';


  typingSleuthId: string | null = null;


  isTyping = false;


  /*
   * Public because the template reads this.
   */

  canPlayerRespond = false;


  private conversationStage:
    ConversationStage = 'opening';


  private conversationStarted = false;


  private nextMessageId = 1;


  /*
   * ============================================================
   * SCROLL STATE
   * ============================================================
   */

  private shouldScroll = false;


  /*
   * True when the player is currently close enough to the
   * bottom that new messages should automatically follow.
   *
   * This starts true so the opening conversation behaves
   * normally.
   */

  private shouldAutoScroll = true;


  /*
   * ============================================================
   * TIMERS
   * ============================================================
   */

  private typingTimer:
    ReturnType<typeof setTimeout> | null = null;


  private responseTimers:
    ReturnType<typeof setTimeout>[] = [];


  /*
   * ============================================================
   * LIFECYCLE
   * ============================================================
   */

  ngOnInit(): void {

    /*
     * Try to restore the existing conversation first.
     */

    const restored =
      this.restoreConversation();


    /*
     * If the conversation already exists, do not restart
     * the scripted sequence.
     */

    if (restored) {

      this.changeDetector.detectChanges();

      /*
       * If the player was already at a response point when
       * they left the page, allow them to continue.
       */

      if (this.canPlayerRespond) {
        this.focusComposer();
      }

      return;
    }


    /*
     * New conversation.
     */

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


    /*
     * Force the initial system message to render.
     */

    this.changeDetector.detectChanges();


    /*
     * Begin the NPC conversation after the initial
     * message has been rendered.
     */

    const timer =
      setTimeout(() => {

        this.playOpeningConversation();

        this.changeDetector.detectChanges();

      }, 250);


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


    /*
     * Save one final time so an unsent player message
     * is not lost when leaving the page.
     */

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


    /*
     * Display exactly what the player typed.
     */

    this.addMessage({

      sender: 'player',

      text: message,

      timestamp:
        this.getCurrentTime()

    });


    /*
     * Clear composer.
     */

    this.playerMessage = '';


    /*
     * Save immediately so the player's input and
     * conversation state are persistent.
     */

    this.saveConversation();


    /*
     * Player cannot respond again until the next
     * scripted conversation beat finishes.
     */

    this.canPlayerRespond = false;


    this.changeDetector.detectChanges();


    /*
     * MVP 1 deliberately ignores the actual text.
     *
     * MVP 2 can replace this with an AI response system.
     */

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
   * OPENING CONVERSATION
   * ============================================================
   */

  private playOpeningConversation(): void {

    const opening: ScriptedMessage[] = [

      {
        sleuthId: 'jonah',

        text:
          'I still think the vehicle is the part we should be looking at.'
      },

      {
        sleuthId: 'mara',

        text:
          'You have said that approximately forty-seven times.'
      },

      {
        sleuthId: 'jonah',

        text:
          'Because nobody has actually explained why it was found where it was.'
      },

      {
        sleuthId: 'riley',

        text:
          'Okay, both of you. We have a new person.'
      },

      {
        sleuthId: 'mara',

        text:
          'Oh. Hey. New person.'
      },

      {
        sleuthId: 'riley',

        text:
          'You looking into the Emily Carter case too?'
      }

    ];


    this.playMessagesSequentially(
      opening,
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

        this.playCaseIntroduction();

        break;


      case 'awaiting-case-response':

        this.playTheoryConversation();

        break;


      case 'awaiting-theory-response':

        this.playInvestigationInvite();

        break;


      case 'awaiting-investigation-response':

        this.playPublicAccessConversation();

        break;


      default:

        break;

    }

  }


  /*
   * ============================================================
   * CASE INTRODUCTION
   * ============================================================
   */

  private playCaseIntroduction(): void {

    this.conversationStage =
      'case-introduction';


    this.saveConversation();


    const messages: ScriptedMessage[] = [

      {
        sleuthId: 'jonah',

        text:
          'Nice. We have been digging around this one for a while.'
      },

      {
        sleuthId: 'riley',

        text:
          'Emily has been missing since October 2024. So, yeah... almost two years now.'
      },

      {
        sleuthId: 'mara',

        text:
          'She was twenty-seven when she disappeared.'
      },

      {
        sleuthId: 'riley',

        text:
          'There are a few theories about what happened.'
      },

      {
        sleuthId: 'jonah',

        text:
          'The development project is probably the obvious one.'
      },

      {
        sleuthId: 'mara',

        text:
          'And there are people who think somebody in the police department knows more than they have said.'
      },

      {
        sleuthId: 'riley',

        text:
          'We have not been able to prove either theory.'
      },

      {
        sleuthId: 'riley',

        text:
          'What do you think?'
      }

    ];


    this.playMessagesSequentially(
      messages,
      () => {

        this.conversationStage =
          'awaiting-case-response';


        this.canPlayerRespond = true;


        this.saveConversation();


        this.changeDetector.detectChanges();


        this.focusComposer();

      }
    );

  }


  /*
   * ============================================================
   * THEORY CONVERSATION
   * ============================================================
   */

  private playTheoryConversation(): void {

    this.conversationStage =
      'theories';


    this.saveConversation();


    const messages: ScriptedMessage[] = [

      {
        sleuthId: 'mara',

        text:
          'Yeah, that is pretty much where we are too.'
      },

      {
        sleuthId: 'jonah',

        text:
          'The development angle is not completely out of nowhere. Emily had environmental concerns about some of the work happening around Amherst.'
      },

      {
        sleuthId: 'riley',

        text:
          'But having a reason to investigate somebody is not the same thing as proving they had anything to do with a disappearance.'
      },

      {
        sleuthId: 'mara',

        text:
          'Exactly.'
      },

      {
        sleuthId: 'jonah',

        text:
          'And the police theory is even harder to prove.'
      },

      {
        sleuthId: 'riley',

        text:
          'That is why we are trying to stick to actual records instead of just building theories around rumors.'
      },

      {
        sleuthId: 'riley',

        text:
          'You want to help us look?'
      }

    ];


    this.playMessagesSequentially(
      messages,
      () => {

        this.conversationStage =
          'awaiting-theory-response';


        this.canPlayerRespond = true;


        this.saveConversation();


        this.changeDetector.detectChanges();


        this.focusComposer();

      }
    );

  }


  /*
   * ============================================================
   * INVESTIGATION INVITATION
   * ============================================================
   */

  private playInvestigationInvite(): void {

    this.conversationStage =
      'investigation-invite';


    this.saveConversation();


    const messages: ScriptedMessage[] = [

      {
        sleuthId: 'jonah',

        text:
          'Good. Honestly, we could use another set of eyes.'
      },

      {
        sleuthId: 'mara',

        text:
          'We have not found much yet.'
      },

      {
        sleuthId: 'riley',

        text:
          'But there are public records, local sites, old posts... enough to start putting the pieces together.'
      },

      {
        sleuthId: 'mara',

        text:
          'Start with the boring stuff.'
      },

      {
        sleuthId: 'jonah',

        text:
          'The boring stuff is usually where the useful stuff is hiding.'
      },

      {
        sleuthId: 'riley',

        text:
          'We can give you access to the Amherst public records.'
      }

    ];


    this.playMessagesSequentially(
      messages,
      () => {

        this.conversationStage =
          'awaiting-investigation-response';


        this.canPlayerRespond = true;


        this.saveConversation();


        this.changeDetector.detectChanges();


        this.focusComposer();

      }
    );

  }


  /*
   * ============================================================
   * PUBLIC ACCESS CONVERSATION
   * ============================================================
   */

  private playPublicAccessConversation(): void {

    this.conversationStage =
      'public-access';


    this.saveConversation();


    const messages: ScriptedMessage[] = [

      {
        sleuthId: 'jonah',

        text:
          'The community board and local exchange are useful too.'
      },

      {
        sleuthId: 'mara',

        text:
          'Just remember that people online are very good at being confidently wrong.'
      },

      {
        sleuthId: 'riley',

        text:
          'The police records should give you something more concrete to work with.'
      },

      {
        sleuthId: 'jonah',

        text:
          'Hey Riley.'
      },

      {
        sleuthId: 'riley',

        text:
          'Yeah?'
      },

      {
        sleuthId: 'jonah',

        text:
          'Unlock the portal for them?'
      },

      {
        sleuthId: 'riley',

        text:
          'Sure. Give me a second.'
      }

    ];


    this.playMessagesSequentially(
      messages,
      () => {

        this.conversationStage =
          'unlocking';


        this.saveConversation();


        const timer =
          setTimeout(() => {

            this.unlockPublicAccess();

          }, 1200);


        this.responseTimers.push(timer);

      }
    );

  }


  /*
   * ============================================================
   * PUBLIC ACCESS UNLOCK
   * ============================================================
   */

  private unlockPublicAccess(): void {

    this.accessService
      .unlockPublicAccess();


    this.conversationStage =
      'complete';


    this.addMessage({

      sender: 'system',

      text:
        'AMHERST PUBLIC ACCESS UNLOCKED',

      timestamp:
        this.getCurrentTime()

    });


    this.saveConversation();


    const timer =
      setTimeout(() => {

        this.typeNpcMessage(
          'riley',

          'You are in. Public access is unlocked now. See what you can find.'

        );

      }, 600);


    this.responseTimers.push(timer);

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

    let index = 0;


    const playNext = (): void => {

      if (
        index >= messages.length
      ) {

        onComplete();

        return;

      }


      const message =
        messages[index];


      index++;


      const initialDelay =
        message.delay ?? 650;


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


      this.responseTimers.push(timer);

    };


    playNext();

  }


  /*
   * ============================================================
   * NPC TYPING INDICATOR
   * ============================================================
   *
   * The previous implementation typed every character.
   *
   * This version only displays the NPC typing state for a
   * short period, then inserts the complete message.
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
     * Keep the typing delay conversational rather than
     * proportional to every individual character.
     */

    const typingDelay =
      this.getTypingIndicatorDelay(text);


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


        if (onComplete) {
          onComplete();
        }

      }, typingDelay);

  }


  private getTypingIndicatorDelay(
    text: string
  ): number {

    /*
     * Short messages feel almost immediate.
     * Longer messages give the impression that the
     * person actually composed a thought.
     */

    if (
      text.length < 45
    ) {

      return 700;

    }


    if (
      text.length < 100
    ) {

      return 1050;

    }


    return 1350;

  }


  private getConversationPause(
    text: string
  ): number {

    if (
      text.endsWith('?')
    ) {

      return 1000;

    }


    if (
      text.length < 45
    ) {

      return 650;

    }


    return 800;

  }


  /*
   * ============================================================
   * COMPOSER FOCUS
   * ============================================================
   */

  private focusComposer(): void {

    /*
     * Allow Angular to render the enabled composer first.
     */

    const timer =
      setTimeout(() => {

        const input =
          document.querySelector(
            '.composer-row input'
          ) as HTMLInputElement | null;


        input?.focus();

      }, 50);


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


    /*
     * Only automatically follow the message if the player
     * was already at the bottom of the conversation.
     */

    if (this.shouldAutoScroll) {

      this.shouldScroll = true;

    }


    this.changeDetector.detectChanges();


    this.scheduleScrollToBottom();

  }


  /*
   * ============================================================
   * AUTO SCROLL
   * ============================================================
   */

  private scheduleScrollToBottom(): void {

    if (
      !this.shouldScroll ||
      !this.shouldAutoScroll
    ) {

      return;

    }


    /*
     * The new message must exist in the DOM before we
     * calculate the new scroll height.
     */

    setTimeout(() => {

      this.scrollToBottom();


    }, 0);

  }


  private scrollToBottom(
    smooth = true
  ): void {

    const element =
      this.messageList?.nativeElement;


    if (!element) {

      return;

    }


    element.scrollTo({

      top:
        element.scrollHeight,

      behavior:
        smooth
          ? 'smooth'
          : 'auto'

    });


    this.shouldScroll = false;

  }


  private isNearBottom(
    element: HTMLElement
  ): boolean {

    const distanceFromBottom =
      element.scrollHeight -
      element.scrollTop -
      element.clientHeight;


    /*
     * A small tolerance means the player does not have
     * to land on the exact final pixel to resume auto-scroll.
     */

    return distanceFromBottom <= 80;

  }

  handleMessageListScroll(): void {

    const element =
      this.messageList?.nativeElement;

    if (!element) {
      return;
    }

    this.shouldAutoScroll =
      this.isNearBottom(element);

  }

  /*
   * ============================================================
   * PERSISTENCE
   * ============================================================
   */

  saveConversation(): void {

    /*
     * localStorage is intentionally used only for the
     * client-side vertical slice.
     *
     * This is not a backend/database implementation.
     */

    if (
      typeof window === 'undefined'
    ) {

      return;

    }


    const state: PersistedChatState = {

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

      window.localStorage.setItem(

        this.storageKey,

        JSON.stringify(state)

      );

    } catch {

      /*
       * Persistence failure should never prevent
       * the chat itself from functioning.
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

      const stored =
        window.localStorage.getItem(
          this.storageKey
        );


      if (!stored) {

        return false;

      }


      const state =
        JSON.parse(
          stored
        ) as PersistedChatState;


      if (
        !state ||
        !Array.isArray(state.messages)
      ) {

        return false;

      }


      this.messages =
        state.messages;


      this.playerMessage =
        state.playerMessage ?? '';


      this.conversationStage =
        state.conversationStage ??
        'opening';


      this.conversationStarted =
        state.conversationStarted ??
        true;


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


      /*
       * A persisted completed conversation should remain
       * completed and should not restart.
       */

      if (
        this.conversationStage ===
        'complete'
      ) {

        this.canPlayerRespond = false;

      }


      /*
       * Restore response states so a conversation that was
       * left at a player-response point remains interactive.
       */

      if (

        this.conversationStage ===
          'awaiting-introduction' ||

        this.conversationStage ===
          'awaiting-case-response' ||

        this.conversationStage ===
          'awaiting-theory-response' ||

        this.conversationStage ===
          'awaiting-investigation-response'

      ) {

        this.canPlayerRespond = true;

      }


      this.shouldAutoScroll = true;

      this.shouldScroll = true;


      return true;

    } catch {

      /*
       * If the stored state is malformed for any reason,
       * start a clean conversation instead of breaking Home.
       */

      window.localStorage.removeItem(
        this.storageKey
      );


      return false;

    }

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