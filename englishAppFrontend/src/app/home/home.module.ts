// src/app/home/home.module.ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; // Ensure IonicModule is imported
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, // Importing IonicModule
    RouterModule.forChild([{ path: '', component: HomePage }]),
  ],
  declarations: [HomePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this to resolve issues with custom elements
})
export class HomePageModule {}
