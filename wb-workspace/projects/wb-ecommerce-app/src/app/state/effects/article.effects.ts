import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ArticlesService } from '../../example-tests/shared/articles.service';

@Injectable()
export class ArticleEffects {

  loadArticles$ = createEffect(() => this.actions$.pipe(
    ofType('[Articles] Load Articles'),
    mergeMap(() => this.articlesService.getAll()
      .pipe(
        map(articles => ({ type: '[Articles] Load Articles success', articles })),
        catchError(() => EMPTY)
      ))
    )
  );
  constructor(
    private actions$: Actions,
    private articlesService: ArticlesService
  ) {}
}
