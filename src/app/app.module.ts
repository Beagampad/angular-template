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



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    RutaComponent,
    RutaDetailComponent,
    LoginComponent,
    MyprofileComponent
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
    MatChipsModule
  ],
  providers: [
    NeedAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
