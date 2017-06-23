import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Hero } from './hero';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class HeroService{
  private heroesUrl = 'http://localhost:8001/heroes/';
  private heroUrl = 'http://localhost:8001/hero';

  constructor (private http: Http) {}

  getHeroes() : Promise<Hero[]> {
    return this.http.get(this.heroesUrl).toPromise()
    .then(response => response.json().Data as Hero[])
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log('An error occured', error);
    return Promise.reject(error.message || error);
  }

  getHero(id: number): Promise<Hero> {
    const url = `${this.heroUrl}/${id}`;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json().Data as Hero)
    .catch(this.handleError);
  }

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroUrl}/${hero.Id}`;
    return this.http
    .put(url, JSON.stringify(hero))
    .toPromise()
    .then(() => hero)
    .catch(this.handleError);
  }

  create(name: string): Promise<Hero> {
    return this.http
    .post(this.heroesUrl, JSON.stringify({Id: null, Name:name}))
    .toPromise()
    .then(res => res.json().Data as Hero)
    .catch(this.handleError);
  }

  delete(id: number) : Promise<void> {
    const url = `${this.heroUrl}/${id}`;
    return this.http.delete(url)
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
  }
}
