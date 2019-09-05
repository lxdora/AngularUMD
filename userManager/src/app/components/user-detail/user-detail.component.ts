import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/servers/user.service';
import { Router,  ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: any;
  id: any;
  constructor(public userService: UserService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.userService.getUser(this.id).subscribe(user => {
      this.user = user;
    });
  }

}
