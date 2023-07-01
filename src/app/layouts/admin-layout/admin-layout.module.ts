import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LbdModule } from '../../lbd/lbd.module';
import { NguiMapModule} from '@ngui/map';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { EditComponent } from 'app/user/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { DialogAnimationsExampleDialog } from 'app/tables/table-dialog';
import { CustomFilterPipe } from 'app/tables/custom-filter-pipe.pipe';


@NgModule({
  imports: [
    MatButtonModule, MatDialogModule,
    MatDialogModule, MatButtonModule,
    MatSlideToggleModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(AdminLayoutRoutes),
    LbdModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'}), 
    
  ],
  declarations: [
    HomeComponent,
    UserComponent,
    EditComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    EditComponent,
    DialogAnimationsExampleDialog,
    CustomFilterPipe
  ],
  exports:[ReactiveFormsModule, FormsModule,

  ]
})

export class AdminLayoutModule {}
