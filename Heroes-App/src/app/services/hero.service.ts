import { Injectable } from '@angular/core';
import { HEROES } from '../hero-data'; // mock data
import { Hero } from '../models/hero.model'; // models

@Injectable()
export class HeroService {
  getHeroes(): Hero[] {
    return HEROES;
  }
}
