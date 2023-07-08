import { Component, OnInit } from '@angular/core';
import { HospitaisService } from '../tables/hospitais.service';
import { Hospital } from '../tables/hospital';

import { FormGroup, Validators, FormControl } from '@angular/forms';

import { Router} from '@angular/router';

import { ToastEvokeService } from '@costlydeveloper/ngx-awesome-popup';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  hospital: Hospital = new Hospital();
  momentForm! : FormGroup;
  formCliente: any;

  constructor(
    private hospitaisService: HospitaisService, 
    private router: Router,
    private toastEvokeService: ToastEvokeService) { }

  ngOnInit() {
    this.momentForm = new FormGroup({
      nome: new FormControl('', [Validators.required])
    });   
  }

  get nome(){
      return this.momentForm.get('nome')!;
  }

  //criar um novo hospital
  async saveHospital(){
    await this.hospitaisService.createHospital(this.hospital).subscribe( data =>{
      
           
      //aqui enviar essa notificacao para o array de mensagens tambem para aparecer no badge
    },
    error => console.log("Erro: ",error));

    this.toastEvokeService.success('Sucesso!', 'Hospital salvo com sucesso!').subscribe();
      this.router.navigate(['/table']); 

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
