import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../services/article.service';
import { Router } from '@angular/router';
//import { AlertService } from '../services/AlertService';


@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent {
  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private articleService: ArticleService,
//private alertService: AlertService
) { }

 
addArticle(){
  this.loading = true;
    this.articleService.create(this.model)
      .subscribe(
      data => {
        //this.alertService.success('Article added successfully', true);
        this.router.navigate(['/article']);
      },
      error => {
        //this.alertService.error(error._body);
        this.loading = false;
      });
  }

}
