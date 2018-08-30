import { Component, OnInit } from '@angular/core';
import { UsersService} from 'src/app/users.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  usuaria: IUser[] = [];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private usersService: UsersService,
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.usersService.getUser(id)
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
