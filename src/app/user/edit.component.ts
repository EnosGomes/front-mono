import { Component, OnInit } from '@angular/core';
import { HospitaisService } from '../tables/hospitais.service';
import { Hospital } from '../tables/hospital';
import {ThemePalette} from '@angular/material/core';
import {FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';

import { Router, NavigationEnd, NavigationStart, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  [x: string]: any;

  id: string;
  hospital: Hospital = new Hospital();
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

  constructor(private hospitaisService: HospitaisService, 
    private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit() {

    //console.log("Ida da rota = ", this.route.snapshot.params['id']);

    this.id = this.route.snapshot.params['id'];

    this.hospitaisService.getHospitalById(this.id).subscribe( data =>{
      this.hospital = data;
    },
    error => console.log(error));
  
  }
  //criar um novo hospital
  updateHospital(){
    this.hospitaisService.updateHospital(this.hospital.id,this.hospital)
    .subscribe( data =>{
      this.router.navigate(['/table']);
    },
    error => console.log(error));
  }

  onSubmit(){
    this.updateHospital();
  }

  isChecked = true;
}
