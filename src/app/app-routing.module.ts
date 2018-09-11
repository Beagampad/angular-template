import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutaComponent } from 'src/app/ruta/ruta.component';
import { HomeComponent } from 'src/app/home/home.component';
import { RutaDetailComponent } from 'src/app/ruta-detail/ruta-detail.component';
import { LoginComponent } from 'src/app/login/login.component';
import { NeedAuthGuard } from 'src/app/auth.guard';
import { MyprofileComponent } from 'src/app/myprofile/myprofile.component';
import { HomeLogOutComponent } from './home-log-out/home-log-out.component';
import { MisinvitacionesComponent } from './misinvitaciones/misinvitaciones.component';
import { RegistroComponent} from './registro/registro.component';
import { AdminComponent } from './admin/admin.component';
import { AdminUpdateComponent } from './admin-update/admin-update.component';

const routes: Routes = [
  {path: 'rutas', component: RutaComponent,canActivate: [NeedAuthGuard]},
 // {path: '', component: HomeComponent},
  {path: 'detail/:id', component: RutaDetailComponent},
  {path: 'profile', component: MyprofileComponent,canActivate: [NeedAuthGuard]},
  {path: 'home', component: HomeLogOutComponent},
  {path: 'misinvitaciones', component: MisinvitacionesComponent},
  {path: 'registro/:tk', component: RegistroComponent},
  {path: 'admin', component: AdminComponent,canActivate: [NeedAuthGuard]},
  {path: 'detailUser/:id', component: AdminUpdateComponent},


  {
    path: '',
    component: HomeComponent,
    canActivate: [NeedAuthGuard] // <---- connected Route with guard
  },
  {
    path: 'login',
    component: LoginComponent
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
