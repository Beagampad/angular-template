import { Component, OnInit } from '@angular/core';
import { NotaloneService } from 'src/app/notalone.service';

@Component({
  selector: 'app-ruta',
  templateUrl: './ruta.component.html',
  styleUrls: ['./ruta.component.css']
})
export class RutaComponent implements OnInit {

  rutas: IRuta[] = [];
  titulo: string = 'Bienvenidos';

  constructor(private notaloneService: NotaloneService) { }

  ngOnInit() {
    this.getRutas();
  }

  getRutas(): void {
    this.notaloneService.getRutas()
        .subscribe(rutas => this.rutas = rutas);
  }
}


interface IRuta2 {
  id: number;
  usuaria: string;
  hora ?: string;
  origen: string;
  destino: string;
  medio: string;
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
