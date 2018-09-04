import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NotaloneService } from 'src/app/notalone.service';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-ruta-detail',
  templateUrl: './ruta-detail.component.html',
  styleUrls: ['./ruta-detail.component.css']
})
export class RutaDetailComponent implements OnInit {

  ruta: IRuta[] = [];
  usuaria: IUser[] = [];
  lat1 = 36.717678;
  lng1 = -4.280396;
  lat2 = 36.717678;
  lng2 = -4.280396;
  origin: any;
  destination: any;



  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private notaloneService: NotaloneService,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {

    this.getRuta();

  }

  getRuta(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    // console.log(id);
    this.notaloneService.getRuta(id)
      .subscribe(ruta => {this.ruta = ruta;
        this.lat1 = parseFloat(ruta[0].coordenadas.split(',')[0]);
        this.lng1 = parseFloat(ruta[0].coordenadas.split(',')[1]);
        this.lat2 = parseFloat(ruta[0].coordenadas2.split(',')[0]);
        this.lng2 = parseFloat(ruta[0].coordenadas2.split(',')[1]);
        this.origin = { lat: this.lat1, lng: this.lng1 };
        this.destination = { lat: this.lat2, lng: this.lng2 };
        // console.log(this.lat2);
         // console.log(this.lng2);
        this.usersService.getUser(ruta[0].idusuaria).subscribe(usuaria => this.usuaria = usuaria) ;
      });
  }


  /*recenterMap(lat, lng){
    this.lat1 = lat;
    this.lng1 = lng;
    }*/

}

interface IRuta {
  idruta: number;
  idusuaria: number;
  hora ?: string;
  origen: string;
  destino: string;
  medio: string;
  coordenadas: string;
  comentarios: string;
}

interface IUser {
  id: number;
  nombre: string;
  apellidos: string;
  fechanacimiento: string;
  intereses: string;
  foto ?: string;
  email: string;
  password1?: string;
  repetirpass?: string;
  nombreusuaria?: string;
  idinvitador?: string;
  numinvitaciones?: string;
}


