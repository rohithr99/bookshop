import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QMartComponent } from './q-mart.component';

describe('QMartComponent', () => {
  let component: QMartComponent;
  let fixture: ComponentFixture<QMartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QMartComponent]
    });
    fixture = TestBed.createComponent(QMartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
