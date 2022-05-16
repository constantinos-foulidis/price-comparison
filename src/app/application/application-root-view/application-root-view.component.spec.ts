import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationRootViewComponent } from './application-root-view.component';

describe('ApplicationRootViewComponent', () => {
  let component: ApplicationRootViewComponent;
  let fixture: ComponentFixture<ApplicationRootViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationRootViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationRootViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
