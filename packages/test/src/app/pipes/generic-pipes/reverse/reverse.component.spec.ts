import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseComponent } from './reverse.component';

describe('ReverseComponent', () => {
  let component: ReverseComponent;
  let fixture: ComponentFixture<ReverseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReverseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
