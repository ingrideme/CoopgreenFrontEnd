import { Component, OnInit } from '@angular/core';
import { UserLogin } from './../model/UserLogin';
import { AuthService } from './../service/auth.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

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

          environment.fotoUser = this.userLogin.fotoUser
          environment.token = this.userLogin.token
          environment.id = this.userLogin.id
          environment.nomeFisOuJuri = this.userLogin.nomeFisOuJuri

          console.log(this.userLogin.fotoUser)
          console.log(environment.nomeFisOuJuri)
          console.log(environment.id)


          this.router.navigate(['/perfil'])
        }, erro => {
          if(erro.status == 500)
          {
            alert('Usuário ou senha incorretos')
          }
        })

    }
}
