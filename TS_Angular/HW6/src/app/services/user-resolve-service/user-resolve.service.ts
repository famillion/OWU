import { Injectable } from '@angular/core';
import {UsersService} from '../users.service';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {User} from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<User[]>{

  constructor(private userService: UsersService) { }

  resolve(): Observable<User[]> | Promise<User[]> | User[] {
    return this.userService.getAllUsers();
  }
}
