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
    console.log(id);
    this.notaloneService.getRuta(id)
      .subscribe(ruta => {this.ruta = ruta;
        console.log(ruta);
        this.usersService.getUser(ruta[0].idusuaria).subscribe(usuaria => this.usuaria = usuaria) ;
      });
  }

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


