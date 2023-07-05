import { Component, OnInit } from '@angular/core';
import { Hospital } from './hospital';
import { HospitaisService } from './hospitais.service';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { DialogAnimationsExampleDialog } from './table-dialog';
import { ToastEvokeService } from '@costlydeveloper/ngx-awesome-popup';
declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
})
export class TablesComponent implements OnInit {
    public tableData1: TableData;
    public tableData2: TableData;
    hospital: Hospital = new Hospital();
    hospitais: Hospital[];
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
    this.hospitaisService.getAllHospitais()
    .subscribe(
      data => {
        this.hospitais = data;
        //this.searchTextHospital = this.hospitais.map((x)=> x.nome);
        //this.hospitais.filter((hospital)=> hospital.ativo === true)
       
        this.nenhumHospital = false;
      },
      error => {     });
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