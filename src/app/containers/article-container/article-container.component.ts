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
export class ArticleContainerComponent {
  
}
