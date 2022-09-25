import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OSenhorDosAneisPageRoutingModule } from './o-senhor-dos-aneis-routing.module';

import { OSenhorDosAneisPage } from './o-senhor-dos-aneis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OSenhorDosAneisPageRoutingModule
  ],
  declarations: [OSenhorDosAneisPage]
})
export class OSenhorDosAneisPageModule {}
