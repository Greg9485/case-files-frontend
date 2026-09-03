import { Injectable } from '@angular/core';

import { AMHERST_BOARD_CATEGORIES, AMHERST_BOARD_THREADS } from './amherst-board.data';

import { MessageBoardCategory, MessageBoardThread } from '../../../models/message-board';


@Injectable({
  providedIn: 'root'
})
export class AmherstBoardService {

  getCategories(): MessageBoardCategory[] {
    return AMHERST_BOARD_CATEGORIES;
  }


  getThreads(): MessageBoardThread[] {
    return AMHERST_BOARD_THREADS;
  }


  getThreadsByCategory(
    categoryId: string
  ): MessageBoardThread[] {

    return AMHERST_BOARD_THREADS.filter(
      thread => thread.categoryId === categoryId
    );
  }


  getThread(
    threadId: string
  ): MessageBoardThread | undefined {

    return AMHERST_BOARD_THREADS.find(
      thread => thread.id === threadId
    );
  }

}