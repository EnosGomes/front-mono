import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { ToastEvokeService } from '@costlydeveloper/ngx-awesome-popup';
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
    private loginservice: LoginService,
    private toastEvokeService: ToastEvokeService) { }

  ngOnInit() {
  }

  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      console.log(this.username, this.password);
      this.router.navigate(['/dashboard/'])
      this.invalidLogin = false
    } else
    this.toastEvokeService.danger('Falha!', 'Usuário ou senha inválidos!').subscribe();
      this.invalidLogin = true
  }

  


}
