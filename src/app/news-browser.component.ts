import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS, Http } from '@angular/http';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MdButton } from '@angular2-material/button';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdInput } from '@angular2-material/input';

import { Article } from './article';
import { NewsService } from './news-browser.service';
import './rxjs-operators';

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
    HTTP_PROVIDERS,
    NewsService
  ]
})
export class NewsBrowserAppComponent implements OnInit {
  formShowing: boolean = false;
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
  errorMessage: string;
  articles: Article[];
  mode = 'Observable';

  constructor(private newsService: NewsService) { }

  getNews() {
    this.newsService.getNews()
                    .subscribe(
                      articles => this.articles = articles,
                      error => this.errorMessage = <any>error);
  }

  ngOnInit() {
    this.getNews();
  }
}
