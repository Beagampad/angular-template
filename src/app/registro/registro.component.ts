import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup,  FormBuilder } from '@angular/forms';
import { UsersService } from 'src/app/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  angForm: FormGroup;
  usuaria: IUser[] = [];
  token: boolean = false;

  constructor(private usersService: UsersService, private route: ActivatedRoute, private router: Router) {this.createForm(); }

  ngOnInit() {
  }

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
  createUsuaria(nombre, apellidos, fechanacimiento, tfn, intereses, foto, email, password1) {

    const tk = +this.route.snapshot.paramMap.get('tk');

    this.usersService.checkToken(tk)
      .subscribe(token => {this.token = token;

          console.log(this.token);
        
        if(this.token){// Si existe el token registro al usuario, devuelve un booleano
      
          this.usersService.registerUser(nombre, apellidos, fechanacimiento, tfn, intereses, foto, email, password1)
          .subscribe(usuaria => this.usuaria = usuaria );
        }else{
          this.router.navigateByUrl('/home');
        }
      
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
}

