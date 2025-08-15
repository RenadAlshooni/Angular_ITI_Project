import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { LatestPostPage } from './components/latest-post-page/latest-post-page';
import { AboutPage } from './components/about-page/about-page';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'latest-posts', component: LatestPostPage },
  { path: 'about', component: AboutPage },
];
