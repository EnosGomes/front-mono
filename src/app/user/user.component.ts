import { Component, OnInit } from '@angular/core';
import { HospitaisService } from '../tables/hospitais.service';
import { Hospital } from '../tables/hospital';

import { Router, NavigationEnd, NavigationStart } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  hospital: Hospital = new Hospital();

  constructor(private hospitaisService: HospitaisService, private router: Router) { }

  ngOnInit() {
  }

  //criar um novo hospital
  saveHospital(){
    this.hospitaisService.createHospital(this.hospital).subscribe( data =>{
      console.log(data);
      this.router.navigate(['/table']);
    },
    error => console.log(error));
  }

  onSubmit(){
    console.log(this.hospital);
    this.saveHospital();
  }

}
