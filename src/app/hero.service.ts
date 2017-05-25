import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
//import { HEROES } from './mock-heroes';


@Injectable()
export class HeroService{

/*  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
*/
  private heroesUrl = 'api/heroes'; // URL to web api
  constructor(private http: Http) { }


  getHeroes(): Promise<Hero[]>{
      return this.http.get(this.heroesUrl)
        .toPromise()
        .then(response => response.json().data as Hero[])
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
      console.error('An error ocurred ', error ); // for demo
      return Promise.reject(error.message || error );
  }
  getHeroSlowly(): Promise<Hero[]>{
    return new Promise( resolve => {
    // simulate a server  latency with 2 second delay
    setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }

  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Hero)
      .catch(this.handleError);
    }

  private headers = new Headers({'Content-Type': 'application/json'});
  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  create(name: string): Promise<Hero> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Hero)
      .catch(this.handleError);
  }


}
