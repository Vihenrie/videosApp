import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeakyBlindersPage } from './peaky-blinders.page';

const routes: Routes = [
  {
    path: '',
    component: PeakyBlindersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeakyBlindersPageRoutingModule {}
