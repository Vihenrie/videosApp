import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OSenhorDosAneisPage } from './o-senhor-dos-aneis.page';

const routes: Routes = [
  {
    path: '',
    component: OSenhorDosAneisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OSenhorDosAneisPageRoutingModule {}
