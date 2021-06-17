import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { LoginComponent } from './login/login.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { SobreComponent } from './sobre/sobre.component';
import { VitrineComponent } from './vitrine/vitrine.component';
import { SobrenosComponent } from './sobre/sobrenos/sobrenos.component';
import { PerfilEditProdutoComponent } from './perfil-usuario/perfil-edit-produto/perfil-edit-produto.component';
import { PerfilDeleteProdutoComponent } from './perfil-usuario/perfil-delete-produto/perfil-delete-produto.component';
import { CompraComponent } from './compra/compra.component';


const routes: Routes = [

  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'cadastrar', component:CadastrarComponent},
  {path:'vitrine', component:VitrineComponent} ,

  {path: 'produto-detalhes/:id', component:CompraComponent },

  {path:'sobre', component:SobreComponent},
  {path: 'sobrenos', component: SobrenosComponent},

  {path: 'perfil', component: PerfilUsuarioComponent },
  {path:'produto-edit/:id', component: PerfilEditProdutoComponent },
  {path: 'produto-delete/:id', component: PerfilDeleteProdutoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }


