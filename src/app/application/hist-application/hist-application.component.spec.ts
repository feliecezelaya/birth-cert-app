import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistApplicationComponent } from './hist-application.component';

describe('HistApplicationComponent', () => {
  let component: HistApplicationComponent;
  let fixture: ComponentFixture<HistApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
