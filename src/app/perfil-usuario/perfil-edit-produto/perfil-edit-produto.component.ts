import { Component, OnInit } from '@angular/core';
import { ProdutoService } from './../../service/produtos.service';
import { ActivatedRoute, Router,  } from '@angular/router';
import { AuthService } from './../../service/auth.service';
import { environment } from './../../../environments/environment.prod';
import { Produtos } from './../../model/Produtos';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil-edit-produto',
  templateUrl: './perfil-edit-produto.component.html',
  styleUrls: ['./perfil-edit-produto.component.css']
})
export class PerfilEditProdutoComponent implements OnInit {

  produto: Produtos = new Produtos()
  categoriaTela: string

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute,

  ) { }

 ngOnInit() {
  if(environment.token == ''){
    this.router.navigate(['/entrar'])
  }

  let id = this.route.snapshot.params['id']
  this.findByIdProduto(id)
}

findByIdProduto(id: number){
  this.produtoService.getByIdProdutos(id).subscribe((resp: Produtos) => {
    this.produto = resp
  })
}

categoriaTipo(event: any){
  this.categoriaTela = event.target.value
}


atualizar(){
  this.produtoService.putProduto(this.produto).subscribe((resp: Produtos)=>{
    this.produto = resp
    Swal.fire({
      icon: 'success',
      text: 'Produto atualizado com sucesso!',
      confirmButtonColor: '#2d6a4f'

    })
    this.router.navigate(['/perfil'])
  })
}

}

