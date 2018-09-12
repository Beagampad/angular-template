import { Component, OnInit } from '@angular/core';
import { NotaloneService } from 'src/app/notalone.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ActivatedRoute, Router } from '@angular/router';

const TOKEN = 'TOKEN';

@Component({
  selector: 'app-ruta',
  templateUrl: './ruta.component.html',
  styleUrls: ['./ruta.component.css']
})
export class RutaComponent implements OnInit {

  rutas: IRuta[] = [];
  closeResult: string;
  angForm: FormGroup;
  coordenadas: string;

  constructor(private notaloneService: NotaloneService, private modalService: NgbModal, private router: Router, private fb: FormBuilder) {

    this.createForm();
   }

  ngOnInit() {
    this.getRutas();
  }

  // RUTAS
  getRutas(): void {
    this.notaloneService.getRutas()
        .subscribe(rutas => this.rutas = rutas);
  }

  getRutabyID(): void {
    // Recuperar IdUsuaria Logueada
    const helper = new JwtHelperService();
    const token = localStorage.getItem(TOKEN); // recovery Token
    console.log(token);
    const decodedToken = helper.decodeToken(token);
    const id = decodedToken.id;
    console.log(id);

    this.notaloneService.getRuta(id)
        .subscribe(rutas => this.rutas = rutas);
  }

  createForm() {
    this.angForm = this.fb.group({
      origen: ['', Validators.required ],
      destino: ['', Validators.required ],
      fecha: ['', Validators.required ],
      hora: ['', Validators.required],
      medio: ['', Validators.required ],
      comentarios: ['', Validators.required ]
   });
  }
  // Crear Ruta por form
  createRuta(idusuaria, origen, destino, fecha, hora, medio, comentarios) {

    // Recuperar IdUsuaria Logueada
    const helper = new JwtHelperService();
    const token = localStorage.getItem(TOKEN); // recovery Token
    // console.log(token);
    const decodedToken = helper.decodeToken(token);
    const id = decodedToken.id;
    // console.log(id);

    this.notaloneService.getCoordOrig(idusuaria, origen)// Get coordenadas de origen
      .subscribe(coordenadas => this.coordenadas = coordenadas);

      console.log(destino);

    this.notaloneService.getCoordDest(idusuaria, destino)// Get coordenadas de destino
      .subscribe(coordenadas => this.coordenadas = coordenadas);

      console.log(this.coordenadas);

    /*this.notaloneService.createRuta(id, origen, destino, fecha, hora, medio, comentarios)
      .subscribe(rutas => this.rutas = rutas );

    //modal.close('Close click')
    this.router.navigateByUrl('/rutas');*/

    this.notaloneService.createRuta(id, origen, destino, fecha, hora, medio, comentarios)
    .subscribe(rutas => {

        this.rutas = rutas;
        this.router.navigateByUrl('/rutas');
});

  }
  // MODAL CREAR RUTA Y MIS RUTAS
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
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
  coordenadas2: string;
  comentarios: string;
}


