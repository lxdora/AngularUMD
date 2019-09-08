import { Component, OnInit } from '@angular/core';
import { Register } from '../models/Register';
import { RegisterService } from 'src/app/servers/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  register: Register = {
    username: '',
    password: ''
  }
  registers: any;
  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit() {
    this.registerService.getRegisters().subscribe(registers => {
      this.registers = registers;
    })
  }
  login(register: Register){
    for (let user of this.registers) {
      if (user.username === register.username && user.password === register.password) {
        this.router.navigate(['home']);
        break;
      }
    }
    this.router.navigate(['login']);

  }

}
