import { Injectable } from '@angular/core';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';
import { inject } from '@angular/core';

interface Course {
  id?: string;
  title: string;
  description: string;
  // Add more fields as per your Firestore course schema
}

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly firestore: Firestore = inject(Firestore);

  // Fetch all courses
  async getCourses(): Promise<Course[]> {
    try {
      const coursesCollection = collection(this.firestore, 'courses');
      const coursesSnapshot = await getDocs(coursesCollection);
      const coursesList = coursesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Course[];
      return coursesList;
    } catch (error) {
      console.error("Error fetching courses: ", error);
      return [];
    }
  }

  // Add a new course
  async addCourse(courseData: Course): Promise<void> {
    try {
      const coursesCollection = collection(this.firestore, 'courses');
      await addDoc(coursesCollection, courseData);
    } catch (error) {
      console.error("Error adding course: ", error);
    }
  }

  // Delete a course by ID
  async deleteCourse(courseId: string): Promise<void> {
    try {
      const courseDoc = doc(this.firestore, 'courses', courseId);
      await deleteDoc(courseDoc);
    } catch (error) {
      console.error("Error deleting course: ", error);
    }
  }
}
