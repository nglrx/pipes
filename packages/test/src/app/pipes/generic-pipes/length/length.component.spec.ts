import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NglrxGenericPipesModule } from '@nglrx/pipes';

import { LengthComponent } from './length.component';

describe('LengthComponent', () => {
  let component: LengthComponent;
  let fixture: ComponentFixture<LengthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, NglrxGenericPipesModule ],
      declarations: [ LengthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
