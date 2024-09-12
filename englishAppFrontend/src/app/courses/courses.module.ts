// src/app/courses/courses.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
  },
];

@NgModule({
  declarations: [CoursesComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes), // Sets up the routing for the Courses module
  ],
})
export class CoursesModule {}
