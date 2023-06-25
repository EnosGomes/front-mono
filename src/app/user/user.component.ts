import { Component, OnInit } from '@angular/core';
import { HospitaisService } from '../tables/hospitais.service';
import { Hospital } from '../tables/hospital';

import { FormGroup, Validators, FormControl } from '@angular/forms';

import { Router, NavigationEnd, NavigationStart } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  hospital: Hospital = new Hospital();
  momentForm! : FormGroup;
  formCliente: any;

  constructor(private hospitaisService: HospitaisService, private router: Router) { }

  ngOnInit() {
    this.momentForm = new FormGroup({
      nome: new FormControl('', [Validators.required])
    });   
  }

  get nome(){
      return this.momentForm.get('nome')!;
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
    if(this.momentForm.invalid){
      console.log("form invalido")
      return;
    }
    console.log(this.hospital);
    this.saveHospital();
  }

}
