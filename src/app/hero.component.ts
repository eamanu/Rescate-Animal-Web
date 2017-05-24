import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})

export class HeroComponent implements OnInit {
  ngOnInit():void{
    this.getHeroes();
  }

  constructor(
    private router: Router,
    private heroService: HeroService){}

  heroes : Hero[];

  selectedHero:Hero;

  getHeroes() : void {
    //this.heroes = this.heroService.getHeroes().then(heroes => this.heroes = heroes); // syncrhonize task
    this.heroService.getHeroSlowly().then(heroes => this.heroes = heroes); // async task
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail():void{
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
