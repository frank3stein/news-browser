import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Article } from './article';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class NewsService {
  constructor (private http: Http) { }

  private alchemyAPIChunk1 = 'https://gateway-a.watsonplatform.net/calls/data/GetNews?apikey=b3b388b1b36883fcd5c206682256a6689ec89688&outputMode=json&start=now-7d&end=now&maxResults=10&q.enriched.url.title=';
  private alchemyAPIChunk2 = '&return=enriched.url.title,enriched.url.text,enriched.url.image,enriched.url.url';

  getNews(query): Observable<Article[]> {
    let searchQuery = this.alchemyAPIChunk1 + query + this.alchemyAPIChunk2;
    return this.http.get(searchQuery)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.result.docs || { };
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
