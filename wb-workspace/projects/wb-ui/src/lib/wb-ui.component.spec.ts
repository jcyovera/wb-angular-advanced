import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WbUiComponent } from './wb-ui.component';

describe('WbUiComponent', () => {
  let component: WbUiComponent;
  let fixture: ComponentFixture<WbUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WbUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WbUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
