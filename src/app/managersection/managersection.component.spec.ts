import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagersectionComponent } from './managersection.component';

describe('ManagersectionComponent', () => {
  let component: ManagersectionComponent;
  let fixture: ComponentFixture<ManagersectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagersectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagersectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
