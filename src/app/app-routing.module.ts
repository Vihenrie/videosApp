import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'wall-e',
    loadChildren: () => import('./wall-e/wall-e.module').then( m => m.WallEPageModule)
  },
  {
    path: 'a-casa-do-dragao',
    loadChildren: () => import('./a-casa-do-dragao/a-casa-do-dragao.module').then( m => m.ACasaDoDragaoPageModule)
  },
  {
    path: 'o-senhor-dos-aneis',
    loadChildren: () => import('./o-senhor-dos-aneis/o-senhor-dos-aneis.module').then( m => m.OSenhorDosAneisPageModule)
  },
  {
    path: 'sandman',
    loadChildren: () => import('./sandman/sandman.module').then( m => m.SandmanPageModule)
  },
  {
    path: 'peaky-blinders',
    loadChildren: () => import('./peaky-blinders/peaky-blinders.module').then( m => m.PeakyBlindersPageModule)
  },
  {
    path: 'stranger-things',
    loadChildren: () => import('./stranger-things/stranger-things.module').then( m => m.StrangerThingsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
