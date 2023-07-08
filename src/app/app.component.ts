import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { AlertaService } from './shared/navbar/alerta.service';
import { Alerta } from './shared/classes/alerta';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  alertas : Alerta[];

     constructor(public location: Location,private alertaService: AlertaService) {}

    ngOnInit(){
      this.retornAlertas();
    }

    retornAlertas(){
      this.alertaService.retornaTodosAtivos()
     .subscribe( data => {
         this.alertas = data;
         console.log(this.alertas);
     });
 }

    isMap(path){
      var titlee = this.location.prepareExternalUrl(this.location.path());
      titlee = titlee.slice( 1 );
      if(path == titlee){
        return false;
      }
      else {
        return true;
      }
    }
}
