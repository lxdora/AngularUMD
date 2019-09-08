import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../components/models/User';
import { identifierModuleUrl } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:3000/users/';
  constructor(private http: HttpClient) { }
  getUsers() {
    return this.http.get(this.url);
  }
  getUser(id) {
    return this.http.get(this.url + id);
  }
  deleteUser(id: string) {
    return this.http.delete(this.url + id);
  }
  updateUser(id: string, user: User){
    return this.http.put(this.url + id, user);
  }
  addUser(user: User) {
    return this.http.post(this.url, user);
  }
}
