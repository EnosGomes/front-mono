import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastEvokeService } from '@costlydeveloper/ngx-awesome-popup';
import { ConsultaService } from '../consultas.service';
import { Consulta } from '../consulta';
import { Hospital } from 'app/tables/hospital';

@Component({
  selector: 'app-consulta-nova',
  templateUrl: './consulta-nova.component.html',
  styleUrls: ['./consulta-nova.component.scss']
})
export class ConsultaNovaComponent implements OnInit {

  momentForm! : FormGroup;
  formCliente: any;
  consulta: Consulta = new Consulta();
  hospitais: Hospital[] = [
    {
    id: "1",
    ativo:true,
    nome:"Dutra",
    cnes:"444"
  },
  {
    id: "1",
    ativo:true,
    nome:"Socorrao",
    cnes:"444"
  }
];

  constructor(
    private consultaService: ConsultaService,
    private router: Router,
    private toastEvokeService: ToastEvokeService
  ) { }

  ngOnInit(): void {

    this.momentForm = new FormGroup({
      nome: new FormControl('', [Validators.required])
    }); 
  }

  get nome(){
    return this.momentForm.get('nome')!;
}

 //criar um novo hospital
 async saveConsulta(){
  await this.consultaService.createConsulta(this.consulta).subscribe( data =>{
    
         
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
  console.log(this.consulta);
  this.saveConsulta();
}

}
