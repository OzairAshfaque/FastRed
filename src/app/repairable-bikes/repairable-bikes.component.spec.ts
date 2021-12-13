import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairableBikesComponent } from './repairable-bikes.component';

describe('RepairableBikesComponent', () => {
  let component: RepairableBikesComponent;
  let fixture: ComponentFixture<RepairableBikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepairableBikesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairableBikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
