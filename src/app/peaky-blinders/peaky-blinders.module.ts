import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeakyBlindersPageRoutingModule } from './peaky-blinders-routing.module';

import { PeakyBlindersPage } from './peaky-blinders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeakyBlindersPageRoutingModule
  ],
  declarations: [PeakyBlindersPage]
})
export class PeakyBlindersPageModule {}
