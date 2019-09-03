import { createAction, props } from '@ngrx/store';
import { Article } from '../../_models/article.model';

/*LoadArticle actions*/
export const loadArticles = createAction('[Articles] Load Articles');

/*LoadArticle actions succesfull*/
export const loadArticlesSuccess = createAction('[Articles] Load Articles success',
 props<{ articles: Article[]}>()
);
