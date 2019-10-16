import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private BASE_URL = 'https://rickandmortyapi.com/api/';

  constructor(
    private http: HttpClient
  ) { }

  get<T>(resource: string, params: any): Observable<T> {
    return this.http.get<T>(this.BASE_URL + resource, {
      params
    }).pipe(
      tap(
        data => this.log(data),
        error => this.handleError(error)
      )
    );
  }

  private log<T>(data: any) {
    console.log('******** PIPE *********');
    console.log(data);
  }


  private handleError<T>(httpErrorResponse: HttpErrorResponse) {
    console.log('******** HANDLE ERROR *********');
    console.log(httpErrorResponse);
  }
}
