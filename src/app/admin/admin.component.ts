import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../users.service';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  usuarias: IUser[] = [];
    
  constructor(private usersService: UsersService) { }

  ngOnInit() {

    this.getUsers();
  }


  // USUARIAS
  getUsers(): void {
    this.usersService.getUsers()
        .subscribe(usuarias => this.usuarias = usuarias);
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





