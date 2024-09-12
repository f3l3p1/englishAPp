import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecoveryPage } from './recovery.page';

describe('RecoveryComponent', () => {
  let component: RecoveryPage;
  let fixture: ComponentFixture<RecoveryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecoveryPage]
    }).compileComponents();

    fixture = TestBed.createComponent(RecoveryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the RecoveryComponent', () => {
    expect(component).toBeTruthy();
  });

  // Add more tests specific to RecoveryComponent
});
