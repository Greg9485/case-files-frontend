import {
  Component,
  Input
} from '@angular/core';

import {
  FakePage
} from '../../../models/fake-page';

import {
  FakeSite
} from '../../../models/fake-site';

import {
  ForumPost
} from '../../../models/forum-post';

import {
  AMHERST_BOARD_FORUM_POSTS
} from './amherst-board.forum';


@Component({
  selector: 'app-amherst-board',
  standalone: true,
  imports: [],
  templateUrl: './amherst-board.component.html',
  styleUrl: './amherst-board.component.scss'
})
export class AmherstBoardComponent {

  @Input()
  page!: FakePage;


  @Input()
  site!: FakeSite;


  @Input()
  navigate!: (
    path: string,
    domain?: string
  ) => void;


  get forumPosts(): ForumPost[] {

    return (
      AMHERST_BOARD_FORUM_POSTS[
        this.page.path
      ] ?? []
    );
  }


  isForumThread(): boolean {

    return this.page.type === 'FORUM_THREAD';
  }

}