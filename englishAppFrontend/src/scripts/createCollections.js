// createCollections.js

import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from './firebaseConfig.js'; // Ensure the path is correct

async function createCollections() {
  try {
    // Creating a 'users' collection and adding a document
    await setDoc(doc(collection(db, 'users'), 'exampleUserID'), {
      usuarioID: 'exampleUserID',
      nombre: 'John Doe',
      nombreUsuario: 'johndoe',
      correo: 'john.doe@example.com',
      profilePicture: 'http://example.com/pic.jpg',
      completedSessions: 5,
      completedTasks: 10,
      achievements: 3
    });

    // Repeat the above process for other collections like 'Cursos', 'Lecciones', etc.
    console.log('Collections and documents created successfully.');
  } catch (error) {
    console.error('Error creating collections:', error);
  }
}

createCollections();
