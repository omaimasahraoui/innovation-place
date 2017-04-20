import { Component, OnInit } from '@angular/core';
import {IArticle} from '../../models/iarticle';
import {ArticleService} from '../../services/article.service';
import { Router } from '@angular/router';
import { AlertService } from '../../services/index';

@Component({
  selector: 'app-article-container',
  templateUrl: './article-container.component.html',
  styleUrls: ['./article-container.component.css'],
  providers:[ArticleService]
})
export class ArticleContainerComponent implements OnInit {
  public articles:IArticle[]=[];
  constructor(private articleService:ArticleService){}
  ngOnInit() {
    // get users from secure api end point
   // this.articleService.getAll()
     // .subscribe(articles => {
      //  this.articles = articles;
     // });
  }
}
