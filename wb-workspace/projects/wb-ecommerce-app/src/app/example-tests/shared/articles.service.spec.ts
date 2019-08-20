import { TestBed } from '@angular/core/testing';

import { ArticlesService } from './articles.service';
import { HttpClientModule } from '@angular/common/http';

describe('ArticlesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientModule]
  }));

  it('should be created', () => {
    const service: ArticlesService = TestBed.get(ArticlesService);
    expect(service).toBeTruthy();
  });
});
