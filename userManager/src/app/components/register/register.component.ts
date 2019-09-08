import { Component, OnInit } from '@angular/core';
import { Register } from '../models/Register';
import { RegisterService } from 'src/app/servers/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register: Register = {
    username: '',
    password: ''
  }

  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit() {
  }
  registe(register: Register) {
    if (register['username'] != null && register['password'] != null){
      this.registerService.addRegister(register).subscribe();
      this.router.navigate(['login']);
    }


  }

}
