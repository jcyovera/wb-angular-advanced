import { Article } from './../../_models/article.model';
import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { ArticleListComponent } from './article-list.component';
import { ArticlesService } from '../shared/articles.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';

describe('ArticleListComponent', () => {
  let component: ArticleListComponent;
  let fixture: ComponentFixture<ArticleListComponent>;
  let ArticlesServiceMock;
  const expectedValue: Article[] = [{title: 'demo', link: 'http', votes: 0}];

  beforeEach(async(() => {
    ArticlesServiceMock = jasmine.createSpyObj('ArticlesService', ['getAll']);
    TestBed.configureTestingModule({
      declarations: [ ArticleListComponent ],
      providers: [
        { provide: ArticlesService, useValue: ArticlesServiceMock },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    ArticlesServiceMock.getAll.and.returnValue(of(expectedValue));
    fixture = TestBed.createComponent(ArticleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should return observable value', (done) => {
    // Arrange
    ArticlesServiceMock.getAll.and.returnValue(of(expectedValue));
    // Act
    fixture.detectChanges();
    component.articles$.subscribe((res) => {
    // Assert
      expect(res).toBe(expectedValue);
      done();
    });

  });
});
