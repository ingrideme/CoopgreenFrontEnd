import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { LoginComponent } from './login/login.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { SobreComponent } from './sobre/sobre.component';
import { VitrineComponent } from './vitrine/vitrine.component';


const routes: Routes = [

  {path:'', redirectTo:'login', pathMatch:'full'},
  {path: 'perfil', component: PerfilUsuarioComponent },
  {path:'login', component: LoginComponent},
  {path:'cadastrar', component:CadastrarComponent},
  {path:'vitrine', component:VitrineComponent} ,
  {path:'sobre', component:SobreComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


