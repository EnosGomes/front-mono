import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { HospitaisService } from './hospitais.service';
import { Router } from '@angular/router';

@Component({
    selector: 'table-dialog',
    templateUrl: 'table-dialog.html',
  })
  export class DialogAnimationsExampleDialog {
    constructor(
      public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>, 
      @Inject(MAT_DIALOG_DATA) public data: any,
      private hospitaisService: HospitaisService,
      private router: Router
      ) {
    }

    ngOnInit() { 
      //console.log(this.data);
    }

    fazAlgo(){
      console.log("Id é: ", this.data.id);
    }

    deleteHospital() {
      this.hospitaisService.deleteHospital(this.data.id).subscribe(
        data => {    window.location.reload();   },
        error => {      });

        
    }

    
  }