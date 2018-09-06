import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NotaloneService } from 'src/app/notalone.service';
import { UsersService } from '../users.service';
import {  FormControl, FormGroup,  FormBuilder } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

const TOKEN = 'TOKEN';

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
  closeResult: string;

  // angForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private notaloneService: NotaloneService,
    private usersService: UsersService,
    private modalService: NgbModal,

  ) { /*this.createForm();*/}



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
        this.usersService.getUser(ruta[0].idusuaria).subscribe(usuaria => this.usuaria = usuaria) ;
      });
  }

  joinme(email, content): void {

    const helper = new JwtHelperService();
    const token = localStorage.getItem(TOKEN); // recovery Token
    const decodedToken = helper.decodeToken(token);
    const id = decodedToken.id;
     console.log(id);

    this.usersService.getUser(id)
      .subscribe(usuaria => {this.usuaria = usuaria;
        console.log(usuaria[0].tfn);
        this.notaloneService.joinme(usuaria[0].nombre, usuaria[0].tfn, email, usuaria[0].email)
        .subscribe(ruta => this.ruta = ruta); });

        this.open(content);
  }
  // MODAL
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

  /*createForm() {

    this.angForm = new FormGroup({
      disscuss: new FormControl(),
   });
  }

  leavecomment(idusuaria, disscuss): void {
    const id = +this.route.snapshot.paramMap.get('id');
     console.log(id);
    this.notaloneService.leavecomment(idusuaria, disscuss)
      .subscribe(ruta => {this.ruta = ruta; });
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


