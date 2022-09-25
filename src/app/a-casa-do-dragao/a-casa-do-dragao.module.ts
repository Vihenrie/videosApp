import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ACasaDoDragaoPageRoutingModule } from './a-casa-do-dragao-routing.module';

import { ACasaDoDragaoPage } from './a-casa-do-dragao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ACasaDoDragaoPageRoutingModule
  ],
  declarations: [ACasaDoDragaoPage]
})
export class ACasaDoDragaoPageModule {}
