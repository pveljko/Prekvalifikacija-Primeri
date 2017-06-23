import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable'; //NIJE angular
import 'rxjs/add/operator/map';

import { Hero } from './hero';

@Injectable()
export class HeroSearchService {
  constructor(private http: Http) {}

  private heroesUrl = 'http://localhost:8001/heroes/';

  search(term: string): Observable<Hero[]> {
    return this.http
    .get(`${this.heroesUrl}?name=${term}`)
    .map(response => response.json().Data as Hero[]);
  }
}
