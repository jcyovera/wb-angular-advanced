import { createReducer, on, Action } from '@ngrx/store';
import { IArticleState } from '../models/article.state';
import { loadArticles, loadArticlesSuccess } from '../actions/article.action';

export const INITIAL_STATE: IArticleState = {
  article : { title: '', link: '', votes : 0},
  articles: []
};

export const articleReducer = createReducer(INITIAL_STATE,
  on(loadArticlesSuccess, (state, { articles}) => ({
    ...state,
    loading: true,
    articles
  }))
  );

export function reducer(state: IArticleState | undefined, action: Action) {
    return articleReducer(state, action);
  }
