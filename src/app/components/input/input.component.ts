import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
    trigger('searchOpen', [
      state('open', style({
        width: '300px',
        padding: '12px 42px 12px 24px'
      })),
      transition('close => open', [
        animate('.5s')
      ]),
      transition('open => close', [
        animate('.2s')
      ]),
    ]),
  ]
})
export class InputComponent implements OnInit {
  @Input() open: boolean = false;
  @Output() onKeyup = new EventEmitter<any>();

  emitEntry(event: any) {
    this.onKeyup.emit(event.target.value);
  }
  toggleSearch() {
    this.open = !this.open;
  }

  ngOnInit(): void {

  }
}
