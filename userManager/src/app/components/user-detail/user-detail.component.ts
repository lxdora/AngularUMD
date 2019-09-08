import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/servers/user.service';
import { Router,  ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { User } from '../models/User';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User = {
    name: '',
    email: '',
    phone: '',
    company: ''
  };
  id: number;
  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.userService.getUser(this.id).subscribe(user => {
      this.user = user;
    });
  }
  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe();
    this.router.navigate(['/users']);
  }

}
