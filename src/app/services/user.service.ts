import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../models/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  create(object: Users): Observable<Users> {
    return this.http.post<Users>('http://localhost:4000/users/adduser', object);
  }
}
