import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../shared/articles.service';
import { Article } from '../../_models/article.model';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  articles$ = this.articlesService.getAll();
  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {

  }

}
