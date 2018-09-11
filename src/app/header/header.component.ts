import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private usersService: UsersService,private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.usersService.logout();
    this.router.navigateByUrl('/home');
      

  }

}
