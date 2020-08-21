import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Item from './Item';

// This should be stored in the environment.ts file
const BASE_URL = 'http://54.83.140.141:8080';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodos() : Observable<Item[]> {
    return this.http.get<Item[]>(`${BASE_URL}/todos`).pipe(
      catchError((error: any) => {
        console.error(error);
        return of([]);
      })
    )
  }
}
