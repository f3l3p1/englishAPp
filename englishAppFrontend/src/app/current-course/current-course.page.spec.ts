import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrentCoursePage } from './current-course.page';

describe('CurrentCoursePage', () => {
  let component: CurrentCoursePage;
  let fixture: ComponentFixture<CurrentCoursePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentCoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
