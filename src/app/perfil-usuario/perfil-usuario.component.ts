import { Component, OnInit } from '@angular/core';
import { Produto } from './../model/Produto';
import { User } from './../model/User';
import { Router } from '@angular/router';
import { ProdutoService } from './../service/produto.service';
import { AuthService } from './../service/auth.service';
import { environment } from './../../environments/environment.prod';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {
  categoriaTela: string
  produto: Produto= new Produto()
  listaProduto: Produto[]
  user: User = new User()

  idUser = environment.id
  token = environment.token
  nomeCooperativa = environment.nomeFisouJuri

  constructor(
    private router : Router,
    private produtoService:ProdutoService,
    private authService: AuthService
  ) { }


  ngOnInit(){
    window.scroll(0,0)
    if (environment.token == '') {
      this.router.navigate(['/entrar'])
      alert('Sua sessão expirou,faça o login novamente')
    }

  }

  findByIdUser(){
    this.authService.getByIdUser(this.idUser).subscribe((resp:User)=>{
      this.user= resp
      })
    }

  categoriaTipo(event: any){
    this.categoriaTela = event.target.value
  }

  cadastrar(){
    this.user.id = this.idUser
    this.produto.usuarioCriador = this.user
    this.produto.tipo = this.categoriaTela

    this.produtoService.postProduto(this.produto).subscribe((resp:Produto)=>{
      this.produto = resp
      alert('produto cadastrado com sucesso!')
      this.produto = new Produto
    })
}


}

