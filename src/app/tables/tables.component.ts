import { Component, OnInit } from '@angular/core';
import { Hospital } from './hospital';
import { HospitaisService } from './hospitais.service';
import { Router } from '@angular/router';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
    public tableData1: TableData;
    public tableData2: TableData;
    hospital: Hospital = new Hospital();
    hospitais: Hospital[];
    currentHospital = null;
    message = '';
    //id: string;

  constructor(private hospitaisService: HospitaisService, private router: Router) { }

 
  ngOnInit() {

    this.tableData1 = {
      headerRow: [ 'ID', 'Name', 'Country', 'City', 'Salary'],
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


    

    this.hospitaisService.getAllHospitais()
    .subscribe(
      data => {
        this.hospitais = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  updateHospital(id:string){
    console.log("id"+id)
    this.router.navigate(['/edit', {
      aid: id
    }]);
  }


  deleteHospital(id) {
    this.hospitaisService.deleteHospital(id).subscribe(
      data => {
        
        console.log(data);
      },
      error => {
        console.log(error);
      });

  }

}
