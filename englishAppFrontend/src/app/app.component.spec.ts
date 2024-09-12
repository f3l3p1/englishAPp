import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA] // Use CUSTOM_ELEMENTS_SCHEMA to ignore unknown elements
    }).compileComponents(); // Ensure Angular compiles the component

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance; // Get instance of the component
    fixture.detectChanges(); // Trigger initial data binding
  });

  it('should create the app', () => {
    expect(component).toBeTruthy(); // Check if the component is created
  });
});
