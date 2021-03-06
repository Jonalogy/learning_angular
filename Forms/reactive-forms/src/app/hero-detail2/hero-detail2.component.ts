import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'hero-detail-2',
  templateUrl: './hero-detail2.component.html',
  styleUrls: ['./hero-detail2.component.css']
})
export class HeroDetail2Component {
  heroForm = new FormGroup({
    name: new FormControl(),
    age: new FormControl()
  });
}
