import { Injectable } from '@angular/core';

export interface Bookmark {
  title: string;
  domain: string;
  path: string;
}

@Injectable({
  providedIn: 'root'
})
export class BookmarksService {

  private readonly storageKey = 'case-files-bookmarks';

  getBookmarks(): Bookmark[] {
    const stored = localStorage.getItem(this.storageKey);

    if (!stored) {
      return [];
    }

    try {
      return JSON.parse(stored);
    } catch {
      return [];
    }
  }

  isBookmarked(path: string): boolean {
    return this.getBookmarks()
      .some(bookmark => bookmark.path === path);
  }

  addBookmark(bookmark: Bookmark): void {

    const bookmarks = this.getBookmarks();

    if (
      bookmarks.some(
        existing => existing.path === bookmark.path
      )
    ) {
      return;
    }

    bookmarks.push(bookmark);

    localStorage.setItem(
      this.storageKey,
      JSON.stringify(bookmarks)
    );
  }

  removeBookmark(path: string): void {

    const bookmarks = this.getBookmarks()
      .filter(bookmark => bookmark.path !== path);

    localStorage.setItem(
      this.storageKey,
      JSON.stringify(bookmarks)
    );
  }

  toggleBookmark(bookmark: Bookmark): void {

    if (this.isBookmarked(bookmark.path)) {
      this.removeBookmark(bookmark.path);
    } else {
      this.addBookmark(bookmark);
    }

  }

  clearBookmarks(): void {
    localStorage.removeItem(this.storageKey);
  }

}