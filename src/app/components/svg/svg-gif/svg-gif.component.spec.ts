import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgGifComponent } from './svg-gif.component';

describe('SvgGifComponent', () => {
  let component: SvgGifComponent;
  let fixture: ComponentFixture<SvgGifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgGifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
