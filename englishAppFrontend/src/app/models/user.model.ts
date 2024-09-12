// src/app/models/user.model.ts
export interface User {
  usuarioID: string; // Change from number to string
  nombre: string;
  nombreUsuario: string;
  correo: string;
  completedSessions?: number; // Optional
  completedTasks?: number;     // Optional
  achievements?: number;       // Optional
  profilePicture?: string;     // Optional
  // Add other properties as needed
}
