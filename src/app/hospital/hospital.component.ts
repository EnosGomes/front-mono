import { Component, OnInit } from '@angular/core';
import { HospitaisService } from '../tables/hospitais.service';
import { Hospital } from '../tables/hospital';

import { FormGroup, Validators, FormControl } from '@angular/forms';

import { Router, NavigationEnd, NavigationStart } from '@angular/router';
@Component({
  selector: 'hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {

  hospital: Hospital = new Hospital();
  momentForm! : FormGroup;
  formCliente: any;

  constructor(private hospitaisService: HospitaisService, private router: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
