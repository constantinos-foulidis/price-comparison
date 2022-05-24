import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthviewComponent } from './authview.component';

describe('AuthviewComponent', () => {
  let component: AuthviewComponent;
  let fixture: ComponentFixture<AuthviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
