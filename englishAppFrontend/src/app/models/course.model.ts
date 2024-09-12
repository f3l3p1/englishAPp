export interface User {
  usuarioID: number;  // Match with backend's user ID
  nombre: string;     // Full name
  nombreUsuario: string;  // Username
  correo: string;     // Email
  contrasena?: string; // Password, if necessary, though typically not exposed
  profilePicture?: string; // Profile picture URL
}
