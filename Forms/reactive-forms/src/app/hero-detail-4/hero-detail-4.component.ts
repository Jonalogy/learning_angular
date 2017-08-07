import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { Address, Hero, states } from '../data-model';

@Component({
  selector: 'hero-detail-4',
  templateUrl: './hero-detail-4.component.html',
  styleUrls: ['./hero-detail-4.component.css']
})
export class HeroDetail4Component {
  heroForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  private createForm() {
    this.heroForm = this.fb.group({
      name: ['', Validators.required ],
      address: this.fb.group(new Address()), // <-- a FormGroup with a new address
      power: '',
      sidekick: ''
    });
  }
}
