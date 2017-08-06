import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {states} from '../data-model';

@Component({
  selector: 'hero-detail-3',
  templateUrl: './hero-detail3.component.html',
  styleUrls: ['./hero-detail3.component.css']
})
export class HeroDetail3Component {
  heroForm: FormGroup;
  AllStates = states;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  private createForm() {
    this.heroForm = this.fb.group({
      name: ['', Validators.required], // Creates a FormControl called `name`
      power: '',
      sidekick: '',
      address: this.fb.group({
        street: '',
        city: '',
        state: '',
        zip: ''
      })
    });
  }
}
