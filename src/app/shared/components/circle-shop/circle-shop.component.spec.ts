import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleShopComponent } from './circle-shop.component';

describe('CircleShopComponent', () => {
  let component: CircleShopComponent;
  let fixture: ComponentFixture<CircleShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircleShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
