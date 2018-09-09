import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import {  FormControl, FormGroup,  FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin-update',
  templateUrl: './admin-update.component.html',
  styleUrls: ['./admin-update.component.css']
})
export class AdminUpdateComponent implements OnInit {

  usuaria: IUser[] = [];
  angForm: FormGroup;

  constructor(private route: ActivatedRoute, private usersService: UsersService) { this.createForm();}

  ngOnInit() {

    this.getUser();
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
      tfn: new FormControl(),
   });
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    
        this.usersService.getUser(id).subscribe(usuaria => this.usuaria = usuaria) ;
  };

  modificar(id, email, intereses): void {
    
    console.log(id);
    this.usersService.updateUser(id, email, intereses)
      .subscribe(usuaria => this.usuaria = usuaria);
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
