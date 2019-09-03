import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../shared/articles.service';
import { Article } from '../../_models/article.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  articles$ = this.articlesService.getAll();
  constructor(private articlesService: ArticlesService, private store: Store<{ articles: Article[] }>) { }

  ngOnInit() {
    this.store.dispatch({ type: '[Articles] Load Articles'});

  }

}
