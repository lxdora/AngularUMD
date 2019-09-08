import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { UserService } from 'src/app/servers/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: User = {
    name: '',
    email: '',
    phone: '',
    company: ''
  };
  id: string;
  constructor(private userService: UserService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activeRoute.snapshot.params['id'];
    this.userService.getUser(this.id).subscribe(user => {
      this.user = user;
    });
  }
  updateUser(id: string, user: User){
    console.log(id);
    console.log(user);
    this.userService.updateUser(id, user).subscribe();
    this.router.navigate(['/users']);
  }

}
