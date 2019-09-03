import { IArticleState } from './article.state';

export interface ICounterState {
  count: number;
}

export interface IAppstate {
  countstate?: ICounterState;
  articleState: IArticleState;
}
