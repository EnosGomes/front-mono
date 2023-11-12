import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastEvokeService } from '@costlydeveloper/ngx-awesome-popup';
import { HospitaisService } from 'app/tables/hospitais.service';
import { Hospital } from 'app/tables/hospital';
import { DialogAnimationsExampleDialog } from 'app/tables/table-dialog';
import { Observable } from 'rxjs';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.scss']
})
export class ConsultasComponent implements OnInit {

  public tableData1: TableData;
    public tableData2: TableData;
    hospital: Hospital = new Hospital();
    hospitais: Observable<Hospital[]>;
    hospitais2: Hospital[];
    currentHospital = null;
    message = '';
    nenhumHospital = true;
    title = 'angular-text-search-highlight';
  searchText = '';
  searchTextHospital : string[];
  characters = [
    'Ant-Man',
    'Aquaman',
    'Asterix',
    'The Atom',
    'The Avengers',
    'Batgirl',
    'Batman',
    'Batwoman'
  ]

  constructor(
    private hospitaisService: HospitaisService, 
    private router: Router, 
    public dialog: MatDialog,
    private toastEvokeService: ToastEvokeService) { }
 
  ngOnInit() {

    this.tableData1 = {
      headerRow: [ 'Name', 'Name', 'Status','Opções'],
      dataRows: [
          ['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
          ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
          ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
          ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
          ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
          ['6', 'Mason Porter', 'Chile', 'Gloucester', '$78,615']
      ]
  };
  this.tableData2 = {
      headerRow: [ 'ID', 'Name',  'Salary', 'Country', 'City' ],
      dataRows: [
          ['1', 'Dakota Rice','$36,738', 'Niger', 'Oud-Turnhout' ],
          ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
          ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux' ],
          ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park' ],
          ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten', ],
          ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester' ]
      ]
    }    
    this.getAllHospitaisAtivos();
  }

  getAllHospitaisAtivos(){
    this.hospitais = this.hospitaisService.getAllHospitais();
  }

  updateHospital(id:string){
    this.router.navigate(['/edit/'+id]) ;
  }

  deleteHospital(id) {
    this.hospitaisService.deleteHospital(id).subscribe(
      data => {       },
      error => {      });
  }

  openDialog(id:string) {
    const dialogRef = this.dialog.open(DialogAnimationsExampleDialog, {
      data: {
        id: id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log("Id vindo da tela de hospitais: ", id);
    });
  }
}