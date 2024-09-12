// src/app/services/cursos.service.ts
import { Injectable } from '@angular/core';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import db from '../../firebase/firebaseConfig'; // Ajusta según la ubicación real

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  async getCursos() {
    const cursosCol = collection(db, 'cursos');
    const cursoSnapshot = await getDocs(cursosCol);
    return cursoSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  async addCurso(curso) {
    await addDoc(collection(db, 'cursos'), curso);
  }

  async updateCurso(id: string, updatedData: any) {
    await updateDoc(doc(db, 'cursos', id), updatedData);
  }

  async deleteCurso(id: string) {
    await deleteDoc(doc(db, 'cursos', id));
  }
}
