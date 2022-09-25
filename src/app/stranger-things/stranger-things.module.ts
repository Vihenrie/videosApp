import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StrangerThingsPageRoutingModule } from './stranger-things-routing.module';

import { StrangerThingsPage } from './stranger-things.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StrangerThingsPageRoutingModule
  ],
  declarations: [StrangerThingsPage]
})
export class StrangerThingsPageModule {}
