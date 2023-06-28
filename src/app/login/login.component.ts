import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = 'enos'
  password = 'enos'
  invalidLogin = false

  constructor(private router: Router,
    private loginservice: LoginService) { }

  ngOnInit() {
  }

  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      console.log(this.username, this.password);
      this.router.navigate(['/dashboard/'])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }

  


}
