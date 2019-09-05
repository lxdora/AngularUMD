import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }
  getUsers() {
    return this.http.get('http://localhost:3000/users');
  }
  getUser(id) {
    return this.http.get('http://localhost:3000/users/' + id);
  }
}
