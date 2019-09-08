import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/servers/user.service';
import { User } from '../models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: User = {
    name: '',
    email: '',
    phone: '',
    company: ''
  }
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }
  addUser(user: User) {
    this.userService.addUser(user).subscribe();
    this.router.navigate(['/users']);
  }

}
