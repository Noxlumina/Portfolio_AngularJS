import { Component, OnDestroy, OnInit } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';
import { Subject } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, OnDestroy {
  private destroy$!: Subject<boolean>;

  constructor(private apiService: PortfolioService, private router: Router) { }
  Landscapes: any;
  Portrayal: any;


  ngOnInit() {
    //redirection en haut de page lors du chargement de la page
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
    //chargement des donnée grâce au service
    this.apiService.searchPhotos('portrait').subscribe(
      data => {
        this.Portrayal = data.photos
        console.log(this.Portrayal)
      },
      error => {
        console.log(error);
      }
    );
    this.apiService.searchPhotos('landscapes').subscribe(
      data => {
        this.Landscapes = data.photos

      },
      error => {
        console.log(error);
      }
    );
    this.destroy$ = new Subject<boolean>();
  }
  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
