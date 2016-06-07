import { HTTP_PROVIDERS, Http } from '@angular/http';
import { Component } from '@angular/core';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MdButton } from '@angular2-material/button';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdInput } from '@angular2-material/input';

@Component({
  moduleId: module.id,
  selector: 'news-browser-app',
  templateUrl: 'news-browser.component.html',
  styleUrls: ['news-browser.component.css'],
  directives: [
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MdToolbar,
    MdButton,
    MdInput,
    MdIcon
  ],
  providers: [
    MdIconRegistry,
    HTTP_PROVIDERS
  ]
})
export class NewsBrowserAppComponent {
  views: Object[] = [
    {
      name: "My Account",
      description: "Edit my account information",
      icon: "assignment ind"
    },
    {
      name: "Favorites",
      description: "Edit my starred topics",
      icon: "stars"
    }
  ];
  articles: Object[] = [
    {
      title: "Puppies in the Park",
      body: "On Tuesday there were corgis in Central Park.",
      imageUrl: "http://deepanilassociates.com/wp-content/uploads/2013/01/Business-News-qlook.jpg"
    },
    {
      title: "Kittens and Mittens",
      body: "You want to see kittens with mittens? Well here's your chance!",
      imageUrl: "http://deepanilassociates.com/wp-content/uploads/2013/01/Business-News-qlook.jpg"
    }
  ];
}
