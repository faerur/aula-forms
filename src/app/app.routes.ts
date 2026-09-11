import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Dashboard } from './pages/dashboard/dashboard';
import { Blog } from './pages/blog/blog';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/blog' },
  { path: 'blog', component: Blog },
  { path: 'dashboard', component: Dashboard },
];
