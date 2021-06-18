import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ProdutoService } from '../service/produtos.service';
import { Produtos } from './../model/Produtos';
import { environment } from 'src/environments/environment.prod';
import Swal  from 'sweetalert2';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

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


  compra(){
    Swal.fire({
      icon: 'success',
      text: 'Compra finalizada!',
      confirmButtonColor: '#2d6a4f'

    })}

}

