import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighRevenueStationsComponent } from './high-revenue-stations.component';

describe('HighRevenueStationsComponent', () => {
  let component: HighRevenueStationsComponent;
  let fixture: ComponentFixture<HighRevenueStationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighRevenueStationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighRevenueStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
