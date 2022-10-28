import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ABMComponent } from './abm.component';

describe('ABMComponent', () => {
  let component: ABMComponent;
  let fixture: ComponentFixture<ABMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ABMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ABMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
