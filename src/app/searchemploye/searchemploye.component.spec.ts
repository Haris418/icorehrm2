import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchemployeComponent } from './searchemploye.component';

describe('SearchemployeComponent', () => {
  let component: SearchemployeComponent;
  let fixture: ComponentFixture<SearchemployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchemployeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchemployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
