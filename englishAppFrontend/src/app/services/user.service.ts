import { Injectable } from '@angular/core';
import { collection, getDocs, addDoc, updateDoc, doc } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';
import { inject } from '@angular/core';

interface User {
  id?: string;
  name: string;
  email: string;
  // Add more fields as per your Firestore user schema
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly firestore: Firestore = inject(Firestore);

  // Fetch all users
  async getUsers(): Promise<User[]> {
    try {
      const usersCollection = collection(this.firestore, 'users');
      const usersSnapshot = await getDocs(usersCollection);
      const usersList = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as User[];
      return usersList;
    } catch (error) {
      console.error("Error fetching users: ", error);
      return [];
    }
  }

  // Add a new user
  async addUser(userData: User): Promise<void> {
    try {
      const usersCollection = collection(this.firestore, 'users');
      await addDoc(usersCollection, userData);
    } catch (error) {
      console.error("Error adding user: ", error);
    }
  }

  // Update an existing user by ID
  async updateUser(userId: string, userData: Partial<User>): Promise<void> {
    try {
      const userDoc = doc(this.firestore, 'users', userId);
      await updateDoc(userDoc, userData);
    } catch (error) {
      console.error("Error updating user: ", error);
    }
  }
}
