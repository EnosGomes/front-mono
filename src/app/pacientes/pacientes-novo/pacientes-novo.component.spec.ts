import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesNovoComponent } from './pacientes-novo.component';

describe('PacientesNovoComponent', () => {
  let component: PacientesNovoComponent;
  let fixture: ComponentFixture<PacientesNovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacientesNovoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacientesNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
