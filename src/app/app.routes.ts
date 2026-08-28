import { Routes } from '@angular/router';

import { AppShellComponent } from '../app/layout/app-shell/app-shell';
import { HomeComponent } from './pages/home/home';
import { CaseComponent } from './pages/case/case';
import { EvidenceComponent } from './pages/evidence/evidence';
import { WitnessesComponent } from './pages/witnesses/witnesses';
import { NotebookComponent } from './pages/notebook/notebook';
import { ArchiveComponent } from './pages/archive/archive';
import { BrowserComponent } from './pages/browser/browser';
import { PolicePortalLoginComponent } from './pages/police-portal-login/police-portal-login';
import { CaseFileComponent } from './pages/case-file/case-file';
import { PolicePortalComponent } from './pages/police-portal/police-portal';
import { PoliceCaseFileComponent } from './pages/police-case-file/police-case-file';

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
        path: 'browser',
        component: BrowserComponent
      }, 
      {
        path: 'police-portal',
        component: PolicePortalComponent
      },
      {
        path: 'police-portal/case/24-1017',
        component: PoliceCaseFileComponent
      },
    ]
  }
];