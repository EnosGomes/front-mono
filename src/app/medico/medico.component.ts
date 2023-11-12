import { Component, OnInit } from '@angular/core';
import { MedicoService } from './medico.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastEvokeService } from '@costlydeveloper/ngx-awesome-popup';
import { Medico } from 'app/shared/classes/medico';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.scss']
})
export class MedicoComponent implements OnInit {

  medicos: Observable<Medico[]>;

  constructor(
    private medicoService: MedicoService, 
    //private router: Router, 
    public dialog: MatDialog,
    //private toastEvokeService: ToastEvokeService
    ) { }

  ngOnInit(): void {
    this.medicoService.getAllMedicos().subscribe( data => {
      this.medicos = data;
      console.log('medicos:',this.medicos);
    });    
  }
}
