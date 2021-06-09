import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RodapeComponent } from './rodape/rodape.component';

import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { LoginComponent } from './login/login.component';
import { SobreComponent } from './sobre/sobre.component';
import { SobrenosComponent } from './sobre/sobrenos/sobrenos.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';

import { VitrineComponent } from './vitrine/vitrine.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';



@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    CadastrarComponent,
    LoginComponent,
    SobreComponent,
    SobrenosComponent,
    MenuComponent,
    VitrineComponent

    PerfilUsuarioComponent

],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
