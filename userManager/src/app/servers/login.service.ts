import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterService } from './register.service';
import { Register } from '../components/models/Register';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLogin: boolean;
  constructor() { }
  getState(): boolean {
    return this.isLogin;
  }
  setState(state: boolean) {
    this.isLogin = state;
  }
}
