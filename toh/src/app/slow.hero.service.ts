import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { HeroService } from './hero.service';


@Injectable()
export class SlowHeroService
{
  getHeroes() : Promise<Hero[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(HEROES), 4000);
    });
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes().then(heroes => heroes.find(hero => hero.Id === id));
  }

}
