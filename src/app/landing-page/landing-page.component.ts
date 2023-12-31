import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  userEmail!: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    //redirection en haut de page lors du chargement de la page
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  /**
   * fonction permettant d'être rediriger sur l'élément portant l'id contact
   */
  scrollToSection() {
    const sectionElement = document.getElementById('contact');
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
