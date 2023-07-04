import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./modules/pages/home/home.component').then(
        (mod) => mod.HomeComponent
      ),
  },
  {
    path: 'menu',
    loadComponent: () =>
      import('./modules/pages/menu/menu.component').then(
        (mod) => mod.MenuComponent
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./modules/pages/contact/contact.component').then(
        (mod) => mod.ContactComponent
      ),
  },
];
