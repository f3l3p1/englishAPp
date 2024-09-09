// src/app/detalle-curso/detalle-curso-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleCursoPage } from './detalle-curso.page';

const routes: Routes = [
  { path: '', component: DetalleCursoPage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleCursoPageRoutingModule {}
