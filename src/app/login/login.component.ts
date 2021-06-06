import { Component, OnInit } from '@angular/core';
import { UserLogin } from './../model/UserLogin';
import { AuthService } from './../service/auth.service';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment.prod';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    userLogin: UserLogin = new UserLogin()

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    }

    entrar(){
      this.authService.entrar(this.userLogin).subscribe((resp: UserLogin) =>
        {
          this.userLogin = resp

          environment.token = this.userLogin.token

          this.router.navigate(['/cadastrar'])
          alert('Logou!')
        }, erro => {
          if(erro.status == 500)
          {
            alert('Usuário ou senha incorretos')
          }
        })

    }
}
