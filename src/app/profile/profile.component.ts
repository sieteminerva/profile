import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { horizontalSlideTransition, verticalSlideTransition } from '../library/animations/routerTransition';
import { ContenfulService } from '../service/contentful/contenful.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [
    horizontalSlideTransition,
    verticalSlideTransition
  ]
})
export class ProfileComponent implements OnInit {

  links = [
    { index: 0, title: 'About', icon: 'info', route: 'about', color: 'sandybrown' },
    { index: 1, title: 'Expertise', icon: 'info', route: 'expertise', color: 'rgb(158, 23, 129)' },
    { index: 2, title: 'Portfolio', icon: 'info', route: 'portfolio', color: 'rgb(63, 207, 171)' },
    { index: 3, title: 'Contact', icon: 'info', route: 'contact', color: 'rgb(212, 244, 96)' },
  ];

  activeLinkIndex = -1;

  constructor(
    private _Router: Router,
    private _Element: ElementRef,
    private _Contenful: ContenfulService
  ) {

  }

  ngOnInit() {
    this.load();

  }

  async load() {
    const products = await this._Contenful.getProducts();
    console.log(['products'], products);
  }

  getState(outlet: RouterOutlet) {
    return outlet.activatedRouteData.state;
  }

  private _setNavColor(color) {
    const nav = this._Element.nativeElement.querySelectorAll('.mat-list-item');
    nav.forEach(item => {
      item.style.color = color;
    });
  }

  private _setBackgroundColor(color) {
    const content = this._Element.nativeElement.querySelectorAll('.minerva-content');
    content.forEach(item => {
      item.style.backgroundColor = color;
    });
  }

  navigateTo(item) {
    // console.log(path, routes);
    this._Router.navigate(['profile', item.route]);
    this._setNavColor(item.color);
    // this._setBackgroundColor(item.color);
  }

}
