import { Routes } from '@angular/router';

import { AppShellComponent } from '../app/layout/app-shell/app-shell';

import { ArchiveComponent } from './pages/archive/archive';
import { BrowserComponent } from './pages/browser/browser';
import { CaseComponent } from './pages/case/case';
import { CaseFileComponent } from './pages/case-file/case-file';
import { DarkWebLoginComponent } from './pages/dark-web-login/dark-web-login';
import { EvidenceComponent } from './pages/evidence/evidence';
import { HomeComponent } from './pages/home/home';
import { NotebookComponent } from './pages/notebook/notebook';
import { PoliceCaseFileComponent } from './pages/police-case-file/police-case-file';
import { PolicePortalComponent } from './pages/police-portal/police-portal';
import { PolicePortalLoginComponent } from './pages/police-portal-login/police-portal-login';
import { WitnessesComponent } from './pages/witnesses/witnesses';

export const routes: Routes = [
  {
    path: '',
    component: AppShellComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'case',
        component: CaseComponent
      },
      {
        path: 'case-file',
        component: CaseFileComponent
      },
      {
        path: 'evidence',
        component: EvidenceComponent
      },
      {
        path: 'witnesses',
        component: WitnessesComponent
      },
      {
        path: 'notebook',
        component: NotebookComponent
      },
      {
        path: 'archive',
        component: ArchiveComponent
      },
      {
        path: 'police-portal-login',
        component: PolicePortalLoginComponent
      },
      {
        path: 'police-portal',
        component: PolicePortalComponent
      },
      {
        path: 'police-portal/case/24-1017',
        component: PoliceCaseFileComponent
      },

      /*
       * ========================================================
       * AMHERST COMMUNITY BOARD
       *
       * Publicly available from the beginning of the game.
       * No TOR access or authentication required.
       * ========================================================
       */

   {
      path: 'amherst-board',
      component: BrowserComponent,
      data: {
        initialDomain: 'amherstboard.local',
        requiresTor: false,
        requiresDarkWebAuth: false
      }
    },

    {
      path: 'amherst-exchange',
      component: BrowserComponent,
      data: {
        initialDomain: 'amherst-exchange.local',
        requiresTor: false,
        requiresDarkWebAuth: false
      }
    },

    {
      path: 'amherst-public-records',
      component: BrowserComponent,
      data: {
        initialDomain: 'amherstpd.local',
        requiresTor: false,
        requiresDarkWebAuth: false
      }
    },

      /*
       * ========================================================
       * TOR BROWSER
       *
       * Protected access.
       * Opens the dark web browser after authentication.
       * ========================================================
       */

      {
        path: 'browser',
        component: BrowserComponent,
        data: {
          initialDomain: 'undernet.local',
          requiresTor: true,
          requiresDarkWebAuth: true
        }
      },

      {
        path: 'dark-web-login',
        component: DarkWebLoginComponent
      }
    ]
  }
];