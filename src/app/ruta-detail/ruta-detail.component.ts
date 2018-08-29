import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NotaloneService } from 'src/app/notalone.service';


@Component({
  selector: 'app-ruta-detail',
  templateUrl: './ruta-detail.component.html',
  styleUrls: ['./ruta-detail.component.css']
})
export class RutaDetailComponent implements OnInit {

  ruta: IRuta[] = [];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private notaloneService: NotaloneService,
  ) { }

  ngOnInit(): void {
    this.getRuta();
  }

  getRuta(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.notaloneService.getRuta(id)
      .subscribe(ruta => this.ruta = ruta);
  }
}

interface IRuta {
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


