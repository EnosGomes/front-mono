import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { EditComponent } from 'app/user/edit.component';
import { ConsultasComponent } from 'app/consultas/consultas.component';
import { MedicoComponent } from 'app/medico/medico.component';
import { PacientesComponent } from 'app/pacientes/pacientes.component';
import { ConsultaNovaComponent } from 'app/consultas/consulta-nova/consulta-nova.component';
import { ConsultaEditComponent } from 'app/consultas/consulta-edit/consulta-edit.component';
//import { LoginComponent } from 'app/login/login.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'consultas',      component: ConsultasComponent },
    { path: 'consultaNova',      component: ConsultaNovaComponent },
    { path: 'consulta/edit/:id',  component: ConsultaEditComponent },
    { path: 'table',                 component: TablesComponent },
    { path: 'medicos',        component: MedicoComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'table/edit/:id', component: EditComponent },
    { path: 'pacientes',      component: PacientesComponent },
    //{ path: 'pacientes',      component: PacientesNovaComponent },
    //{ path: 'pacientes',      component: PacientesEditComponent },
    //{ path: 'login',           component: LoginComponent },
];
