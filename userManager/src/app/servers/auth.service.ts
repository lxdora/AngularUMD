import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private loginService: LoginService) { }
  login(){
    return  this.loginService.getState()
  }
  logout(){
    this.loginService.setState(false);
  }
}
