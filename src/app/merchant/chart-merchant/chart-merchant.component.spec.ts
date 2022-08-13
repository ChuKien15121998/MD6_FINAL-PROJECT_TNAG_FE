import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartMerchantComponent } from './chart-merchant.component';

describe('ChartMerchantComponent', () => {
  let component: ChartMerchantComponent;
  let fixture: ComponentFixture<ChartMerchantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartMerchantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartMerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
