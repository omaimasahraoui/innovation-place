import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AppConfig } from '../app.config';
import { IArticle } from '../models/index';

@Injectable()
export class ArticleService {
  constructor(private http: Http, private config: AppConfig) { }
  getAll() {
    return this.http.get(this.config.apiUrl + '/articles', this.jwt()).map((response: Response) => response.json());
  }

  getById(_id: string) {
    return this.http.get(this.config.apiUrl + '/articles/' + _id, this.jwt()).map((response: Response) => response.json());
  }

  create(article: IArticle) {
    return this.http.post(this.config.apiUrl + '/articles', article, this.jwt());
  }

  update(article: IArticle) {
    return this.http.put(this.config.apiUrl + '/articles/' + article.id, article, this.jwt());
  }

  delete(_id: string) {
    return this.http.delete(this.config.apiUrl + '/articles/' + _id, this.jwt());
  }

  // private helper methods

  private jwt() {
    // create authorization header with jwt token
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      const headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
      console.log(headers);
      return new RequestOptions({ headers: headers });
    }
  }

}


