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
    currentHospital = null;
    message = '';
    //id: string;

  constructor(private hospitaisService: HospitaisService, private router: Router) { }

 
  ngOnInit() {

    this.tableData1 = {
        headerRow: ['Idd',  'Nome', 'Country', 'City' ],
        dataRows: [
            ['1', 'Dakota Rice','$36,738', 'Niger', 'Oud-Turnhout' ],
            ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
            ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux' ],
            ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park' ],
            ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten', ],
            ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester' ]
        ] };

    this.hospitaisService.getAllHospitais()
    .subscribe(
      data => {
        this.hospital = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });

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
      };
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
