// src/app/services/auth.service.ts

import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, User, sendPasswordResetEmail } from '@angular/fire/auth';
import { Observable, from, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser$: Observable<User | null>;

  constructor(private auth: Auth) {
    // Initialize an observable for tracking authentication state changes
    this.currentUser$ = new Observable<User | null>((subscriber) => {
      onAuthStateChanged(this.auth, (user) => {
        subscriber.next(user);
      });
    });
  }

  // Login with email and password
  login(email: string, password: string): Observable<User> {
    return from(signInWithEmailAndPassword(this.auth, email, password)).pipe(
      switchMap((userCredential) => of(userCredential.user))
    );
  }

  // Register a new user with email and password
  register(email: string, password: string): Observable<User> {
    return from(createUserWithEmailAndPassword(this.auth, email, password)).pipe(
      switchMap((userCredential) => of(userCredential.user))
    );
  }

  // Send password reset email
  sendPasswordReset(email: string): Observable<void> {
    return from(sendPasswordResetEmail(this.auth, email));
  }

  // Logout the current user
  logout(): Observable<void> {
    return from(signOut(this.auth));
  }

  // Get the current authenticated user as an observable
  getCurrentUser(): Observable<User | null> {
    return this.currentUser$;
  }
}
