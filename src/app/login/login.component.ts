import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

NgModule({
  imports: [
    RouterModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = '';
  senha = '';

  constructor() { }

  listUser = [
    {user: 'eduardab' , senha: 'edu123'},
    {user: 'ester12' , senha: 'ester123'},
    {user: 'camillyp' , senha: 'cami123'},
    {user: 'bmafra' , senha: 'bruna123'}
  ]

  ngOnInit() {
  }

  logar(user , senha){

  }

}
