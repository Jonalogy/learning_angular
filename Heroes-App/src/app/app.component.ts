import { Component, OnInit } from '@angular/core';
import { HEROES } from './hero-data'; // mock data
import { Hero } from './models/hero.model'; // models
import { HeroService } from './services/hero.service';

@Component({
  selector: 'app-root',
  providers: [HeroService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  hero: Hero = { id: 1, name: 'Windstorm' };
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
}
