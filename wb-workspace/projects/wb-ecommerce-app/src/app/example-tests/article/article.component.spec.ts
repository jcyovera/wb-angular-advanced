import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleComponent } from './article.component';
import { Component } from '@angular/core';
import { Article } from '../../_models/article.model';

@Component({
  template: `
    <app-article
      [article]="article">
    </app-article>`
})
class TestHostComponent {
  article: Article = {title: 'Test Name' , link: '....', votes: 0 };
}
describe('ArticleComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleComponent, TestHostComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should has input value', () => {
    let expectedValue = {title: 'Test Name' , link: '....', votes: 0 };
    expect(component.article).toEqual(expectedValue);
  });
});

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;
  let articleExpected ={title: 'Test Name' , link: '....', votes: 0 };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    component.article = articleExpected;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should has input value', () => {
    expect(component.article).not.toBeNull();
  });
  it('should increase votes', () => {
    let expectedValue = 2;
    component.voteUp(1);
    expect(component.article.votes).toEqual(expectedValue);

  });
  it('should decrease votes', () => {
    let expectedValue = 0;
    component.voteDown(1);
    expect(component.article.votes).toEqual(expectedValue);

  });
});
