import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { Routes, RouterModule } from '@angular/router';
import { UserService } from './servers/user.service';
import { AuthGuard } from './auth.guard';
import { LoginService } from './servers/login.service';
import { AuthService } from './servers/auth.service';
import { RegisterService } from './servers/register.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
  { path: 'users/:id', component: UserDetailComponent, canActivate: [AuthGuard]},
  { path: 'adduser', component: AddUserComponent, canActivate: [AuthGuard]},
  { path: 'edituser/:id', component: EditUserComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginComponent,
    RegisterComponent,
    AddUserComponent,
    EditUserComponent,
    UserDetailComponent,
    HomeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService, LoginService, AuthService, RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
