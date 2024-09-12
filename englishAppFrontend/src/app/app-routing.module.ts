// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule) },
  { path: 'recovery', loadChildren: () => import('./recovery/recovery.module').then(m => m.RecoveryPageModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'user-information', loadChildren: () => import('./user-information/user-information.module').then(m => m.UserInformationModule) },
  { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule) },
  { path: 'courses', loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule) },
  { path: 'current-course', loadChildren: () => import('./current-course/current-course.module').then(m => m.CurrentCoursePageModule) },
  { path: 'detalle-curso', loadChildren: () => import('./detalle-curso/detalle-curso.module').then(m => m.DetalleCursoPageModule) },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
