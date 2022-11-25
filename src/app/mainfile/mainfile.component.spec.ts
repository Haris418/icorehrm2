import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainfileComponent } from './mainfile.component';

describe('MainfileComponent', () => {
  let component: MainfileComponent;
  let fixture: ComponentFixture<MainfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
