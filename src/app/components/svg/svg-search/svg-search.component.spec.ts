import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgSearchComponent } from './svg-search.component';

describe('SvgComponent', () => {
  let component: SvgSearchComponent;
  let fixture: ComponentFixture<SvgSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
