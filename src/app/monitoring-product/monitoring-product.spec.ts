import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringProduct } from './monitoring-product';

describe('MonitoringProduct', () => {
  let component: MonitoringProduct;
  let fixture: ComponentFixture<MonitoringProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonitoringProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitoringProduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
