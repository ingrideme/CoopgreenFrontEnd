import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(  public session: SessionService) {
    
  }

  login (){
    this.session.login = true
  }

  ngOnInit(): void {
  }

}
