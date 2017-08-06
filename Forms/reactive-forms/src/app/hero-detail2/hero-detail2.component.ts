import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail2.component.html',
  styleUrls: ['./hero-detail2.component.css']
})
export class HeroDetail2Component {
  heroForm = new FormGroup({
    name: new FormControl(),
    age: new FormControl()
  });
}
