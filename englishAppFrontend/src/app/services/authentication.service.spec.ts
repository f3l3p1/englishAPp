// src/app/services/authentication.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthenticationService } from './authentication.service';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';

describe('AuthenticationService', () => {
  let service: AuthenticationService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthenticationService]
    });

    service = TestBed.inject(AuthenticationService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch current user', () => {
    const mockUser: User = {
      usuarioID: 1, // Ensure this field is correctly typed in User interface
      nombre: 'John Doe',
      nombreUsuario: 'johndoe',
      correo: 'john@example.com',
      profilePicture: 'http://example.com/profile.jpg'
    };

    service.getCurrentUser().subscribe((user) => {
      expect(user).toEqual(mockUser);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/users/current`);
    expect(req.request.method).toBe('GET');
    req.flush(mockUser);
  });

  // Additional tests for other methods...
});
