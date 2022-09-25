import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WallEPage } from './wall-e.page';

const routes: Routes = [
  {
    path: '',
    component: WallEPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WallEPageRoutingModule {}
