import {
  Component,
  inject
} from '@angular/core';

import {
  FormsModule
} from '@angular/forms';

import {
  AccessService,
  NotebookClue,
  PlayerNote
} from '../../core/services/access';


@Component({
  selector: 'app-notebook',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl:
    './notebook.html',
  styleUrl:
    './notebook.scss'
})
export class NotebookComponent {

  private accessService =
    inject(AccessService);


  selectedNote:
    PlayerNote | null = null;


  isCreatingNote =
    false;

  isEditingNote =
    false;


  noteTitle =
    '';

  noteBody =
    '';


  expandedSources =
    new Set<string>();


  get notebookUnlocked(): boolean {
    return this.accessService
      .isNotebookUnlocked();
  }


  get clues(): NotebookClue[] {
    return this.accessService
      .getNotebookClues();
  }


  get notes(): PlayerNote[] {
    return this.accessService
      .getPlayerNotes();
  }


  get clueSources(): string[] {

    return [
      ...new Set(
        this.clues.map(
          clue =>
            clue.source
        )
      )
    ];

  }


  getCluesForSource(
    source: string
  ): NotebookClue[] {

    return this.clues.filter(
      clue =>
        clue.source === source
    );

  }


  toggleSource(
    source: string
  ): void {

    if (
      this.expandedSources.has(
        source
      )
    ) {

      this.expandedSources.delete(
        source
      );

    } else {

      this.expandedSources.add(
        source
      );

    }

  }


  isSourceExpanded(
    source: string
  ): boolean {

    return this.expandedSources.has(
      source
    );

  }


  startNewNote(): void {

    this.selectedNote =
      null;

    this.isCreatingNote =
      true;

    this.isEditingNote =
      false;

    this.noteTitle =
      '';

    this.noteBody =
      '';
  }


  openNote(
    note: PlayerNote
  ): void {

    this.selectedNote =
      note;

    this.isCreatingNote =
      false;

    this.isEditingNote =
      false;

    this.noteTitle =
      note.title;

    this.noteBody =
      note.body;
  }


  closeNote(): void {

    this.selectedNote =
      null;

    this.isCreatingNote =
      false;

    this.isEditingNote =
      false;

    this.noteTitle =
      '';

    this.noteBody =
      '';
  }


  beginEdit(): void {

    if (
      !this.selectedNote
    ) {
      return;
    }

    this.isEditingNote =
      true;
  }


  cancelEdit(): void {

    if (
      !this.selectedNote
    ) {
      return;
    }

    this.noteTitle =
      this.selectedNote.title;

    this.noteBody =
      this.selectedNote.body;

    this.isEditingNote =
      false;
  }


  saveNewNote(): void {

    const title =
      this.noteTitle.trim();

    const body =
      this.noteBody;


    if (
      !title ||
      !body.trim()
    ) {
      return;
    }


    if (
      body.length > 500
    ) {
      return;
    }


    this.accessService.addPlayerNote(
      title,
      body
    );

    this.closeNote();
  }


  saveEditedNote(): void {

    if (
      !this.selectedNote
    ) {
      return;
    }


    const title =
      this.noteTitle.trim();

    const body =
      this.noteBody;


    if (
      !title ||
      !body.trim()
    ) {
      return;
    }


    if (
      body.length > 500
    ) {
      return;
    }


    const confirmed =
      window.confirm(
        'Save changes to this note?'
      );


    if (!confirmed) {
      return;
    }


    this.accessService.updatePlayerNote(
      this.selectedNote.id,
      title,
      body
    );


    const updatedNote =
      this.accessService
        .getPlayerNotes()
        .find(
          note =>
            note.id ===
            this.selectedNote?.id
        );


    if (updatedNote) {

      this.selectedNote =
        updatedNote;

      this.noteTitle =
        updatedNote.title;

      this.noteBody =
        updatedNote.body;

    }


    this.isEditingNote =
      false;
  }


  deleteNote(): void {

    if (
      !this.selectedNote
    ) {
      return;
    }


    const confirmed =
      window.confirm(
        'Delete this note? This cannot be undone.'
      );


    if (!confirmed) {
      return;
    }


    this.accessService.deletePlayerNote(
      this.selectedNote.id
    );

    this.closeNote();
  }


  formatDate(
    date: Date
  ): string {

    return new Intl.DateTimeFormat(
      'en-US',
      {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
      }
    ).format(date);

  }


  getCharacterCount(): number {
    return this.noteBody.length;
  }

}