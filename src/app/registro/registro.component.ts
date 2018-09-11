import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup,  FormBuilder } from '@angular/forms';
import { UsersService } from 'src/app/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  angForm: FormGroup;
  usuaria: IUser[] = [];
  token = false;
  closeResult: string;
  fileToUpload: File = null;


  constructor(private usersService: UsersService, private route: ActivatedRoute, private router: Router, private modalService: NgbModal) {this.createForm(); }

  ngOnInit() {


  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log(files.item(0));
}
  /*uploadFileToActivity() {
  this.usersService.postFile(this.fileToUpload)
  .subscribe(data => { console.log('OK')
    // do something, if upload success
    }, error => {
      console.log(error);
    });
}*/

  createForm() {

    this.angForm = new FormGroup({
      nombre: new FormControl(),
      apellidos: new FormControl(),
      fechanacimiento: new FormControl(),
      intereses: new FormControl(),
      foto: new FormControl(),
      email: new FormControl(),
      password1: new FormControl(),
      password2: new FormControl(),
   });
  }

  // Crear Usuaria por form
  createUsuaria(files, nombre, apellidos, fechanacimiento, tfn, intereses, email, password1, content) {

   // this.uploadFileToActivity();

   console.log(this.fileToUpload);

    const tk = +this.route.snapshot.paramMap.get('tk');

    this.usersService.checkToken(tk)
      .subscribe(token => {this.token = token;

          console.log(this.token);
        if (this.token) {// Si existe el token registro al usuario, devuelve un booleano
          this.usersService.postFile(this.fileToUpload, nombre, apellidos, fechanacimiento, tfn, intereses, email, password1)
          .subscribe(usuaria => this.usuaria = usuaria );
          this.open(content);
          this.router.navigateByUrl('/login');
        } else {
          this.router.navigateByUrl('/home');
        }
      });
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

