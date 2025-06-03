import { Routes } from '@angular/router';
import { adminGuard } from '../../core/guards/admin.guard';

export const EVENTS_ROUTES: Routes = [
  {
    path: 'edit',
    loadComponent: () => import('./pages/events-edit/events-edit').then(m => m.EventsEdit),
    canActivate: [adminGuard],
  }
];
