import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import {
  NgxAwesomePopupModule,
  DialogConfigModule,
  ConfirmBoxConfigModule,
  ToastNotificationConfigModule
} from '@costlydeveloper/ngx-awesome-popup';
import { MedicoComponent } from './medico/medico.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { PacientesEditComponent } from './pacientes/pacientes-edit/pacientes-edit.component';
import { PacientesNovoComponent } from './pacientes/pacientes-novo/pacientes-novo.component';
import { ConsultaNovaComponent } from './consultas/consulta-nova/consulta-nova.component';
import { ConsultaEditComponent } from './consultas/consulta-edit/consulta-edit.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule,
    NgbModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatDialogModule,
    MatButtonModule,
    NgxAwesomePopupModule.forRoot(), // Essential, mandatory main module.
    DialogConfigModule.forRoot(), // Needed for instantiating dynamic components.
    ConfirmBoxConfigModule.forRoot(), // Needed for instantiating confirm boxes.
    ToastNotificationConfigModule.forRoot() // Needed for instantiating toast notifications.
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,    
    LoginComponent, MedicoComponent, PacientesEditComponent, PacientesNovoComponent, ConsultaNovaComponent, ConsultaEditComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
