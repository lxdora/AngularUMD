import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Register } from '../components/models/Register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url = 'http://localhost:3000/registers/';
  constructor(private http: HttpClient) { }
  getRegisters() {
    return this.http.get(this.url);
  }
  addRegister(register: Register) {
    return this.http.post(this.url, register);
  }
}
