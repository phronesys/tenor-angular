import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgGiftComponent } from './svg-gift.component';

describe('SvgGiftComponent', () => {
  let component: SvgGiftComponent;
  let fixture: ComponentFixture<SvgGiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgGiftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgGiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
