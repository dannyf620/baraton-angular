import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  social = {}
  constructor() {
    this.social = {
      "facebook": "https://www.facebook.com/",
      "twitter": "https://www.twitter.com/",
      "google": "https://www.google.com/"
    }
  }
 
}
