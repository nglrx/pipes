import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericPipesComponent } from './generic-pipes.component';

describe('GenericPipesComponent', () => {
  let component: GenericPipesComponent;
  let fixture: ComponentFixture<GenericPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
