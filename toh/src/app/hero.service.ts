import {Injectable} from '@angular/core';
import {Headers, RequestOptions, Http} from '@angular/http';
import {Hero} from './hero';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class HeroService {
    private heroUrl = 'http://localhost:8090/api/v1/hero';

    constructor(private http: Http) {
    }

    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroUrl).toPromise()
            .then((response) => response.json() as Hero[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.log('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    getHero(id: number): Promise<Hero> {
        const url = `${this.heroUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Hero)
            .catch(this.handleError);
    }

    update(hero: Hero): Promise<Hero> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        const url = `${this.heroUrl}/${hero.Id}`;
        return this.http
            .put(url, JSON.stringify(hero), options)
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    create(name: string): Promise<Hero> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        return this.http
            .post(this.heroUrl, JSON.stringify({Id: null, Name: name}), options)
            .toPromise()
            .then(res => res.json() as Hero)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.heroUrl}/${id}`;
        return this.http.delete(url)
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
}
