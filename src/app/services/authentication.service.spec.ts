import { TestBed } from '@angular/core/testing';
import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should authenticate valid user', () => {
    const result = service.login('test@example.com', 'password');
    expect(result).toBeTrue();
  });

  it('should not authenticate invalid user', () => {
    const result = service.login('invalid@example.com', 'wrongpassword');
    expect(result).toBeFalse();
  });

  it('should register a new user', () => {
    const result = service.register('New User', 'newuser', 'new@example.com', 'newpassword');
    expect(result).toBeTrue();
    
    // Verify the new user can log in
    const loginResult = service.login('new@example.com', 'newpassword');
    expect(loginResult).toBeTrue();
  });

  it('should not register a duplicate user', () => {
    const result = service.register('Test User', 'testuser', 'test@example.com', 'password');
    expect(result).toBeFalse(); // Duplicate registration should fail
  });

  it('should send recovery email for existing user', () => {
    const result = service.sendRecoveryEmail('test@example.com');
    expect(result).toBeTrue();
  });

  it('should not send recovery email for non-existing user', () => {
    const result = service.sendRecoveryEmail('nonexistent@example.com');
    expect(result).toBeFalse();
  });
});
