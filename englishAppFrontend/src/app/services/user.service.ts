// src/app/services/user.service.ts
import { Injectable } from '@angular/core';
import { collection, getDocs, addDoc, updateDoc, doc } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';
import { inject } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly firestore: Firestore = inject(Firestore)

  // Fetch all users
  async getUsers(): Promise<any[]> {
    try {
      const usersCollection = collection(this.firestore, 'users');
      const usersSnapshot = await getDocs(usersCollection);
      const usersList = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      return usersList;
    } catch (error) {
      console.error("Error fetching users: ", error);
      return [];
    }
  }

  // Add a new user
  async addUser(userData: any): Promise<void> {
    try {
      const usersCollection = collection(this.firestore, 'users');
      await addDoc(usersCollection, userData);
    } catch (error) {
      console.error("Error adding user: ", error);
    }
  }

  // Update an existing user by ID
  async updateUser(userId: string, userData: any): Promise<void> {
    try {
      const userDoc = doc(this.firestore, 'users', userId);
      await updateDoc(userDoc, userData);
    } catch (error) {
      console.error("Error updating user: ", error);
    }
  }
}
