import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WallEPageRoutingModule } from './wall-e-routing.module';

import { WallEPage } from './wall-e.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WallEPageRoutingModule
  ],
  declarations: [WallEPage]
})
export class WallEPageModule {}
