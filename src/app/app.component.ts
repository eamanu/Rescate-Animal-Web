import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class AppComponent implements OnInit {
  ngOnInit():void{
    this.getHeroes();
  }

  constructor(private heroService: HeroService){}

  heroes : Hero[];

  selectedHero:Hero;

  getHeroes() : void {
    //this.heroes = this.heroService.getHeroes().then(heroes => this.heroes = heroes); // syncrhonize task
    this.heroService.getHeroSlowly().then(heroes => this.heroes = heroes); // async task
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  title = 'Rescate Animal';
}
