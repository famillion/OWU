import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoservicesService {

  constructor(private http: HttpClient) { }

  getToDoes(): Observable<string[]>{
    return this.http.get<string[]>('https://owu-vue-db.firebaseio.com/users/-MG5Gs7hnlDieHCSXfVN/objTodoList.json');
  }
}
