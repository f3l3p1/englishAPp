// src/app/models/user.model.ts

export interface User {
  usuarioID: number;         // Ensure this matches the backend's user ID
  nombre: string;            // Full name
  nombreUsuario: string;     // Username
  correo: string;            // Email
  contrasena?: string;       // Optional: Password, typically not exposed
  profilePicture?: string;   // Optional: Profile picture URL
  completedSessions?: number; // Optional: Number of completed sessions
  completedTasks?: number;   // Optional: Number of completed tasks
  achievements?: number;     // Optional: Number of achievements earned
  // Add other properties as needed
}
