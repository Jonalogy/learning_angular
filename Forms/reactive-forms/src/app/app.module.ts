import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroDetail2Component } from './hero-detail2/hero-detail2.component';
import { HeroDetail3Component } from './hero-detail3/hero-detail3.component';
import { HeroDetail4Component } from './hero-detail-4/hero-detail-4.component';
import { HeroListComponent } from './hero-list/hero-list.component';

@NgModule({
  declarations: [AppComponent, HeroDetail2Component, HeroDetail3Component, HeroDetail4Component, HeroListComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
