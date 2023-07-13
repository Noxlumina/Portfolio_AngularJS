import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AproposComponent } from './apropos/apropos.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'apropos', component: AproposComponent },
  { path: '404', component: NotfoundComponent },
    { path: '**', redirectTo: '/404' } // Redirection vers la page 404 pour toutes les autres routes non définies
];


  @NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
  })
export class AppRoutingModule {}