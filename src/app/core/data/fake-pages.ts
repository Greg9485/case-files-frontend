import { FakePage } from '../models/fake-page';

import {
  AMHERST_BOARD_PAGES
} from './sites/amherst-board/amherst-board.pages';

import {
  AMHERST_NEWS_PAGES
} from './sites/amherst-news/amherst-news.pages';

import {
  AMHERST_PD_PAGES
} from './sites/amherst-pd/amherst-pd.pages';

import {
  AMHERST_EXCHANGE_PAGES
} from './sites/amherst-exchange/amherst-exchange.pages';

import {
  BACKROOM_PAGES
} from './sites/backroom/backroom.pages';

import {
  UNDERNET_PAGES
} from './sites/undernet/undernet.pages';

export const FAKE_PAGES: FakePage[] = [
  ...AMHERST_BOARD_PAGES,
  ...AMHERST_NEWS_PAGES,
  ...AMHERST_PD_PAGES,
  ...AMHERST_EXCHANGE_PAGES,
  ...BACKROOM_PAGES,
  ...UNDERNET_PAGES
];