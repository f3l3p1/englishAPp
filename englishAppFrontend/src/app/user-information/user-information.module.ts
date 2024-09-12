// src/app/user-information/user-information.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserInformationComponent } from './user-information.component';
import { UserInformationRoutingModule } from './user-information-routing.module'; // Import routing module

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserInformationRoutingModule // Ensure routing module is correctly included
  ],
  declarations: [UserInformationComponent]
})
export class UserInformationModule {}
