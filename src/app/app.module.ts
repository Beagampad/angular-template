import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RutaComponent } from './ruta/ruta.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatListModule} from '@angular/material/list';
import { AppRoutingModule } from './/app-routing.module';
import { RutaDetailComponent } from './ruta-detail/ruta-detail.component';
import { MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { NeedAuthGuard} from './auth.guard';
import { MatMenuModule} from '@angular/material/menu';
import { MatChipsModule} from '@angular/material/chips';
import { MyprofileComponent } from './myprofile/myprofile.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeLogOutComponent } from './home-log-out/home-log-out.component';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import {MatInputModule} from '@angular/material/input';
import { MisinvitacionesComponent } from './misinvitaciones/misinvitaciones.component';
import { RegistroComponent } from './registro/registro.component';
import { AdminComponent } from './admin/admin.component';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AdminUpdateComponent } from './admin-update/admin-update.component';
import { FileSelectDirective } from 'ng2-file-upload';
import {MatStepperModule} from '@angular/material/stepper';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    RutaComponent,
    RutaDetailComponent,
    LoginComponent,
    MyprofileComponent,
    HomeLogOutComponent,
    MisinvitacionesComponent,
    RegistroComponent,
    AdminComponent,
    AdminUpdateComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    AppRoutingModule,
    MatCardModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatMenuModule,
    MatChipsModule,
    MatTooltipModule,
    NgbModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAorDvL2UTCJNA_mqwBM0j8ZHkcFl-PWW8'
    }),
    AgmDirectionModule,
    MatInputModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatStepperModule
  ],
  providers: [
    NeedAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
