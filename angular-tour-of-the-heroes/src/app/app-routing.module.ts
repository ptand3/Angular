import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [   // we define an array of routes with a single route to that component
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full', //bydefault empty path ridrects URL to the dashboard path
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },

];


// The method is called forRoot() because you configure the router at the application's root level.
//  The forRoot() method supplies the service providers and directives needed for routing, and performs
//   the initial navigation based on the current browser URL.
@NgModule({
  imports:
    [
      RouterModule.forRoot(routes)
    ],
  exports:
    [
      RouterModule   //exporting routing will  make router directives available for use in the App Module that will need them
    ]
})
export class AppRoutingModule { }
