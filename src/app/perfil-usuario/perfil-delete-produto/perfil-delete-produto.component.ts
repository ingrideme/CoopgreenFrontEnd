import { Component, OnInit } from '@angular/core';
import { Produtos } from './../../model/Produtos';
import { ProdutoService } from './../../service/produtos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from './../../../environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil-delete-produto',
  templateUrl: './perfil-delete-produto.component.html',
  styleUrls: ['./perfil-delete-produto.component.css']
})
export class PerfilDeleteProdutoComponent implements OnInit {


  produto: Produtos = new Produtos()
  idProduto: number

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
     if(environment.token == ''){
    this.router.navigate(['/entrar'])
  }
  this.idProduto = this.route.snapshot.params['id']
  this.findByIdProduto(this.idProduto)

}

findByIdProduto(id: number){
  this.produtoService.getByIdProdutos(id).subscribe((resp: Produtos) => {
    this.produto = resp
  })
}

apagar(){
  this.produtoService.deleteProduto(this.idProduto).subscribe(()=> {
    Swal.fire({
      icon: 'success',
      text: 'Produto deletado com sucesso!',
      confirmButtonColor: '#2d6a4f'

    })
    this.router.navigate(['/perfil'])
  })
}
}
