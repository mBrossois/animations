import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  routing: object;
  active: string;

  routingSubscription: Subscription;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.routing = this.router.config;

    this.routingSubscription = this.router.events.subscribe(data => {
      if (data instanceof NavigationEnd) {
        this.active = this.replaceRoute(this.router.url);
      }
    });
  }

  replaceRoute(url: string): string {
    return url.replace(/\//g, "");
  }

  onClick(link: string) {
    this.router.navigate([link]).then(() =>
      this.active = this.replaceRoute(this.router.url));
  }

  ngOnDestroy() {
    this.routingSubscription.unsubscribe();
  }
}
