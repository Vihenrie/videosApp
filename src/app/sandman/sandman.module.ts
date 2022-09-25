import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SandmanPageRoutingModule } from './sandman-routing.module';

import { SandmanPage } from './sandman.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SandmanPageRoutingModule
  ],
  declarations: [SandmanPage]
})
export class SandmanPageModule {}
