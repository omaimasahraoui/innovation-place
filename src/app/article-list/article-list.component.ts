import { Component, OnInit } from '@angular/core';
import { IArticle } from '../models/iarticle';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
public articles:IArticle[]=[];
  constructor(private articleService:ArticleService){}
  
  ngOnInit() {
    this.articleService.getAll()
      .subscribe(articles => {
       this.articles = articles;
      });
  }

}
