import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private api: UsersService, private router: Router) {
  }

  ngOnInit() {
  }

  tryLogin(email, password) {
    console.log(email);
    this.api.login(email, password
    )
      .subscribe(
        r => {
          if (r.token) {
            console.log(r);
            this.api.setToken(r.token);
            this.router.navigateByUrl('/');
          }
        },
        r => {
          alert(r.error.error);
        });
  }

}

