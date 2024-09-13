// src/app/curso-list/curso-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CursosService } from '../services/cursos.service';
import { Course } from '../models/course.model';  // Importa la interfaz Course

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.scss']
})
export class CursoListComponent implements OnInit {
  cursos: Course[] = [];  // Usa la interfaz Course

  constructor(private cursosService: CursosService) {}

  ngOnInit() {
    this.loadCursos();
  }

  async loadCursos() {
    this.cursos = await this.cursosService.getCursos();
  }

  async eliminarCurso(id: string) {
    await this.cursosService.deleteCurso(id);
    await this.loadCursos();  // Actualizar la lista después de eliminar
  }
}
