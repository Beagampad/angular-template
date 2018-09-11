import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UsersService } from '../users.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

const TOKEN = 'TOKEN';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuaria: IUser[] = [];
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;


  constructor(private usersService: UsersService,private formBuilder: FormBuilder) { }

  ngOnInit() {

    // Recuperar IdUsuaria Logueada
    const helper = new JwtHelperService();
    const token = localStorage.getItem(TOKEN); // recovery Token
    // console.log(token);
    const decodedToken = helper.decodeToken(token);
    const id = decodedToken.id;
    // console.log(id);

    this.usersService.getUser(id).subscribe(usuaria => this.usuaria = usuaria) ;

    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
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
  tfn: string;
}
