import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'film-list',
    pathMatch: 'full'
  },
  {
    path: 'film-list',
    loadChildren: () => import('./pages/film-list/film-list.module').then( m => m.FilmListPageModule)
  },
  {
    path: 'film-detail',
    loadChildren: () => import('./pages/film-detail/film-detail.module').then( m => m.FilmDetailPageModule)
  },
  {
    path: '**',
    redirectTo: 'film-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
