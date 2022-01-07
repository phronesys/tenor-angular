import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass'],
  animations: [
    trigger('search', [
      // ...
      state('open', style({
        width: '300px',
        padding: '12px 42px 12px 24px'
      })),
      transition('close => open', [
        animate('.5s')
      ]),
      transition('open => close', [
        animate('.5s')
      ]),
    ]),
  ]
})
export class InputComponent implements OnInit {
  @Input() open: boolean;

  constructor() {
    this.open = false
  }
  search() {
    this.open = !this.open;
  }
  ngOnInit(): void {

  }

}
