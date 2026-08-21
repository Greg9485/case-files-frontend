import { Routes } from '@angular/router';

import { AppShellComponent } from '../app/layout/app-shell/app-shell';
import { HomeComponent } from './pages/home/home';
import { CaseComponent } from './pages/case/case';
import { EvidenceComponent } from './pages/evidence/evidence';
import { WitnessesComponent } from './pages/witnesses/witnesses';
import { NotebookComponent } from './pages/notebook/notebook';
import { ArchiveComponent } from './pages/archive/archive';
import { BrowserComponent } from './pages/browser/browser';
import { DarkWebLoginComponent } from './pages/dark-web-login/dark-web-login';

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
        path: 'dark-web-login',
        component: DarkWebLoginComponent
      },
      {
        path: 'browser',
        component: BrowserComponent
      }
    ]
  }
];