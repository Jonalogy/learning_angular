import { Component, OnInit } from '@angular/core';
import { heroes } from "../data-model";

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
