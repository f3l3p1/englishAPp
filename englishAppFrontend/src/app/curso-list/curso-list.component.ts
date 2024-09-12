// src/app/components/curso-list/curso-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.css']
})
export class CursoListComponent implements OnInit {

  cursos = [];

  constructor(private cursosService: CursosService) { }

  async ngOnInit() {
    this.cursos = await this.cursosService.getCursos();
  }

  async eliminarCurso(id: string) {
    await this.cursosService.deleteCurso(id);
    this.cursos = await this.cursosService.getCursos(); // Actualizar la lista después de eliminar
  }
}
