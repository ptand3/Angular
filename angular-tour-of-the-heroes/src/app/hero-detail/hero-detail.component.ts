// The HeroDetailComponent needs a new way to obtain the hero-to-display.
// Get the route that created it,
// Extract the id from the route
// Acquire the hero with that id from the server via the HeroService
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
   hero: Hero; // The hero property must be an Input property, annotated with the @Input() decorator, because the external HeroesComponent will bind to it like this.

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService,

  ) { }

  ngOnInit(): void {
    this.getHero();
  }
  // the route.snapshot is a static image of the route information shortly after the component was created.
  // The paramMap is a dictionary of route parameter values extracted from the URL. The "id" key returns the id of the hero to fetch.
  // Route parameters are always strings. The JavaScript (+) operator converts the string to a number, which is what a hero id should be.


  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  goBack() :void {
    this.location.back();
  }
}