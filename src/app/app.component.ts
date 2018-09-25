import { Component } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Omni-page';
  url = "";

  constructor(router: Router) {
    router.events.pipe(
      filter((event: Event) => { return event instanceof NavigationEnd })
    ).subscribe(
      (event: NavigationEnd) => {
        this.url = event.url;
      }
    );
  }
}

