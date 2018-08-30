import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email = 'xx@hotmail.com';
  password = '123';

  constructor(private api: UsersService, private router: Router) {
  }

  ngOnInit() {
  }

  tryLogin() {
    this.api.login(
      this.email,
      this.password
    )
      .subscribe(
        r => {
          if (r.token) {
            console.log(r.result);
            this.api.setToken(r.token);
            this.router.navigateByUrl('/');
          }
        },
        r => {
          alert(r.error.error);
        });
  }

}

