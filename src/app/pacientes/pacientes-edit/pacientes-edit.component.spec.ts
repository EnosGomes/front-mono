import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesEditComponent } from './pacientes-edit.component';

describe('PacientesEditComponent', () => {
  let component: PacientesEditComponent;
  let fixture: ComponentFixture<PacientesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacientesEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacientesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
