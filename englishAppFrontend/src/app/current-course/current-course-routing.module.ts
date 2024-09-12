// src/app/current-course/current-course-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentCoursePage } from './current-course.page';

const routes: Routes = [
  {
    path: '',
    component: CurrentCoursePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrentCoursePageRoutingModule {}
