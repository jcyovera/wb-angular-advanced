import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleComponent } from './article/article.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleTestsRoutingModule } from './example-tests-routing.module';



@NgModule({
  declarations: [ArticleComponent, ArticleListComponent],
  imports: [
    CommonModule,
    ExampleTestsRoutingModule
  ]
})
export class ExampleTestsModule { }
