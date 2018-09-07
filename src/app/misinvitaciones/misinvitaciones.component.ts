import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup,  FormBuilder } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UsersService } from '../users.service';
import { NotaloneService } from 'src/app/notalone.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

const TOKEN = 'TOKEN';

@Component({
  selector: 'app-misinvitaciones',
  templateUrl: './misinvitaciones.component.html',
  styleUrls: ['./misinvitaciones.component.css']
})
export class MisinvitacionesComponent implements OnInit {

  angForm: FormGroup;
  invitacion: IInvitacion[] = [];
  closeResult: string;

    constructor(
      private notaloneService: NotaloneService,
      private usersService: UsersService,
      private modalService: NgbModal) {

    this.createForm();
   }

  ngOnInit() {

    this.numinvitation();
  }

  createForm() {

    this.angForm = new FormGroup({
      disscuss: new FormControl(),
   });
  }

  sendinvitation(email, comentarios, invitaciones, content): void {

    const helper = new JwtHelperService();
    const token = localStorage.getItem(TOKEN); // recovery Token
    const decodedToken = helper.decodeToken(token);
    const id = decodedToken.id;
     console.log(id);
     console.log(email);

    this.usersService.sendInvitation(id, email, comentarios, invitaciones)
      .subscribe(invitacion => {this.invitacion = invitacion; });

    this.open(content);

}

numinvitation(): void {

  const helper = new JwtHelperService();
  const token = localStorage.getItem(TOKEN); // recovery Token
  const decodedToken = helper.decodeToken(token);
  const id = decodedToken.id;
   console.log(id);

  this.usersService.numInvitation(id)
    .subscribe(invitacion => {this.invitacion = invitacion; });

    // console.log(invitacion[0].numinvitation);


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


}

interface IInvitacion {
  idusuaria: number;
  invitado1: string;
  fecha: string;
  token: number;
}
