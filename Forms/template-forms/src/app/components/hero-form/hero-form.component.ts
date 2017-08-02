import { Component } from '@angular/core';
import { Hero } from '../../models/hero.model';

@Component({
  selector: 'hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {
  Powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  A_Hero = new Hero(18, 'Dr IQ', this.Powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.A_Hero);
  }
}
