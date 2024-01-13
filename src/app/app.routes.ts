import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: 'home',
        loadComponent: () => import('@modules/home/pages/home-page/home-page.component').then(m => m.HomePageComponent),
        children: [
          {
            path: 'tracks',
            loadComponent:() => import('@modules/tracks/pages/tracks-page/tracks-page.component').then(m => m.TracksPageComponent)
          },
          {
            path: 'favorites',
            loadComponent:() => import('@modules/favorites/pages/favorite-page/favorite-page.component').then(m => m.FavoritePageComponent)
          },
          {
            path: 'history',
            loadComponent:() => import('@modules/history/pages/history-page/history-page.component').then(m => m.HistoryPageComponent)
          },
        ]
      },
];
