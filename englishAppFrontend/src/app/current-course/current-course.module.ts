// src/app/current-course/current-course.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CurrentCoursePageRoutingModule } from './current-course-routing.module';
import { CurrentCoursePage } from './current-course.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrentCoursePageRoutingModule
  ],
  declarations: [CurrentCoursePage]
})
export class CurrentCoursePageModule {}
