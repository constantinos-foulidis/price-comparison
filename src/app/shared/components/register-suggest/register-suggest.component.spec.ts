import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSuggestComponent } from './register-suggest.component';

describe('RegisterSuggestComponent', () => {
  let component: RegisterSuggestComponent;
  let fixture: ComponentFixture<RegisterSuggestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSuggestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSuggestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
