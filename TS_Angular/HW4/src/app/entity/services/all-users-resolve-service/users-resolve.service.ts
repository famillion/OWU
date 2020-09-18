import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {User} from '../../models/user/User';
import {UserService} from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class UsersResolveService implements Resolve<User[]>{

  constructor(private userService: UserService) { }

  resolve(): Observable<User[]> | Promise<User[]> | User[] {
    return this.userService.getAllUsers();
  }
}
