import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, doc, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  getCourses(): Observable<any[]> {
    const coursesRef = collection(this.firestore, 'courses');
    return collectionData(coursesRef);
  }

  addCourse(course: any) {
    const coursesRef = collection(this.firestore, 'courses');
    const newCourseRef = doc(coursesRef);
    return setDoc(newCourseRef, course);
  }
}
