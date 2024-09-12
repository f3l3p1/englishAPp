import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterPage } from './register.page';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../services/authentication.service.spec';

class MockAuthenticationService {
  private users: User[] = []; // Ensure User is imported from authentication.service.ts

  register(name: string, username: string, email: string, password: string): boolean {
    const existingUser = this.users.find(user => user.email === email);
    if (existingUser) {
      console.error('User already exists');
      return false; // Simulate registration failure
    }
    const newUser: User = { name, username, email, password }; // Ensure User type is used
    this.users.push(newUser);
    return true; // Simulate successful registration
  }
}


describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;
  let authService: MockAuthenticationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterPage],
      providers: [{ provide: AuthenticationService, useClass: MockAuthenticationService }]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterPage);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthenticationService);
    fixture.detectChanges();
  });

  it('should create the RegisterPage', () => {
    expect(component).toBeTruthy();
  });

  it('should register successfully', () => {
    component.name = 'John';
    component.username = 'john_doe';
    component.email = 'john@example.com';
    component.password = 'password123';
    component.confirmPassword = 'password123'; // Ensure passwords match

    const result = component.onRegister();
    expect(result).toBeTruthy(); // Ensure it returns true on successful registration
  });

  it('should not register if passwords do not match', () => {
    component.name = 'John';
    component.username = 'john_doe';
    component.email = 'john@example.com';
    component.password = 'password123';
    component.confirmPassword = 'different_password'; // Passwords do not match

    const result = component.onRegister();
    expect(result).toBeFalsy(); // Ensure it returns false if passwords do not match
  });

  it('should not register if user already exists', () => {
    authService.register('John', 'john_doe', 'john@example.com', 'password123'); // Initial registration

    spyOn(authService, 'register').and.returnValue(false); // Simulate user already exists

    const result = component.onRegister(); // Attempt to register the same user again
    expect(result).toBeFalsy();
    expect(authService.register).toHaveBeenCalledTimes(1);
  });
});
