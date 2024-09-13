// src/app/models/user.model.ts
export interface User {
  usuarioID: string;  // Cambiado a string para coincidir con los datos de Firebase
  nombre: string;
  nombreUsuario: string;
  correo: string;
  contrasena?: string;
  profilePicture?: string;
  completedSessions?: number;
  completedTasks?: number;
  achievements?: number;
}
