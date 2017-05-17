import { Component } from '@angular/core';

export class Hero{
  id: number;
  name:string;
}

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
<<<<<<< HEAD
export class AppComponent{
=======


export class AppComponent {
  heroes=HEROES;
  selectedHero:Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
>>>>>>> 7ab2d2d31a58d85e789fb481038b5ba054292aae
  title = 'Rescate Animal';
  hero : Hero = {
    id: 1,
    name: "Windstorm"
  }
}
export class Hero{
  id: number;
  name: string;
}
