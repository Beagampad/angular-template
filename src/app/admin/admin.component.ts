import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../users.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  usuarias: IUser[] = [];
  closeResult: string;
  angForm: FormGroup;
    
  constructor(private usersService: UsersService, private modalService: NgbModal, private fb: FormBuilder) { }

  ngOnInit() {

    this.getUsers();
  }


  // USUARIAS
  getUsers(): void {
    this.usersService.getUsers()
        .subscribe(usuarias => this.usuarias = usuarias);
  }

  getUserbyId(): void{
   let id=2;
    this.usersService.getUser(id)
        .subscribe(usuarias => this.usuarias = usuarias);
  }

  // MODAL MODIFICAR USUARIA
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





