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

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private notaloneService: NotaloneService,
  ) { }

  ngOnInit(): void {
    this.getRuta();
  }
  
  getRuta(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    /*this.notaloneService.getRutas(id)
      .subscribe(ruta => this.ruta = ruta);*/
  }

}

interface IRuta{
  id : number;
  usuaria : string;
  hora ?: string;
  origen: string;
  destino: string;
  medio: string;
}

