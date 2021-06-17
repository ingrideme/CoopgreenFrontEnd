import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Produtos } from '../model/Produtos';
import { Router } from '@angular/router';
import { ProdutoService } from '../service/produtos.service';

@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.css']
})
export class VitrineComponent implements OnInit {

  listaProdutos: Produtos[]
  produto: Produtos = new Produtos()

  constructor(
    private router: Router,
    private produtoService: ProdutoService
       ) { }

  ngOnInit(){
    if(environment.token ==''){
       this.router.navigate([('/login')])
    }

    this.getAllProdutos()
  }

  getAllProdutos(){
    this.produtoService.getAllProdutos().subscribe((resp:Produtos[])=>{
      this.listaProdutos = resp
    })
  }



findByIdProduto(id: number){
  this.produtoService.getByIdProdutos(id).subscribe((resp: Produtos) => {
    this.produto = resp
  })
}


}
