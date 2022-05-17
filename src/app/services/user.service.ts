import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _refresh$ = new Subject<void>();
  url = `http://localhost:3000/users/`;

  constructor(private http: HttpClient) { }

  get refresh() {
    return this._refresh$;
  }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }

  postUsers(user: User):Observable<User>{
    return this.http.post<User>(this.url, user)
    .pipe(
      tap(() => {
        this._refresh$.next();
      })
    )
  }

  getUserId(id: number):Observable<User>{
    return this.http.get<User>(`${this.url}/${id}`)
  }

  putUser(user: User):Observable<Object>{
    return this.http.put<Object>(`${this.url}/${user.id}`, user)
  }

  deleteUser(id: number):Observable<Object>{
    return this.http.delete<Object>(`${this.url}/${id}`)
  }
}