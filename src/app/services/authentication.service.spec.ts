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

  it('should authenticate valid user', async () => {
    const result = await service.login('test@example.com', 'password');
    expect(result).toBe(true); // Replaced toBeTrue with toBe(true)
  });

  it('should not authenticate invalid user', async () => {
    const result = await service.login('invalid@example.com', 'wrongpassword');
    expect(result).toBe(false); // Replaced toBeFalse with toBe(false)
  });

  it('should register a new user', async () => {
    const result = await service.register('New User', 'newuser', 'new@example.com', 'newpassword');
    expect(result).toBe(true); // Replaced toBeTrue with toBe(true)
    
    // Verify the new user can log in
    const loginResult = await service.login('new@example.com', 'newpassword');
    expect(loginResult).toBe(true); // Replaced toBeTrue with toBe(true)
  });

  it('should not register a duplicate user', async () => {
    await service.register('Test User', 'testuser', 'test@example.com', 'password');
    const result = await service.register('Test User', 'testuser', 'test@example.com', 'password');
    expect(result).toBe(false); // Duplicate registration should fail
  });

  it('should send recovery email for existing user', async () => {
    const result = await service.sendRecoveryEmail('test@example.com');
    expect(result).toBe(true); // Replaced toBeTrue with toBe(true)
  });

  it('should not send recovery email for non-existing user', async () => {
    const result = await service.sendRecoveryEmail('nonexistent@example.com');
    expect(result).toBe(false); // Replaced toBeFalse with toBe(false)
  });
});
