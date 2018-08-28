import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutaComponent } from 'src/app/ruta/ruta.component';
import { HomeComponent } from 'src/app/home/home.component';
import { RutaDetailComponent } from 'src/app/ruta-detail/ruta-detail.component';

const routes: Routes = [
  {path: 'rutas', component: RutaComponent},
  {path: '', component: HomeComponent},
  {path: 'detail/:id', component: RutaDetailComponent},

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
