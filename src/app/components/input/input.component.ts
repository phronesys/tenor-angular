import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { GifService } from '../../services/gif.service';

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
  @Output() onSearch = new EventEmitter<string>();
  suggestions: Array<string> = [];
  value: string = "";
  showSuggestions: boolean = true;

  constructor(private gifService: GifService) { }

  /* when user types in */
  modelChange = (value: string) => {
    this.debounceAutocomplete(value);
  }

  /* when user clicks on search button */
  toggle = () => {
    if (this.open && this.value.length > 0) this.searchValue();
    this.open = !this.open;
  }

  /* executed on enter keypress too */
  searchValue = () => {
    this.onSearch.emit(this.value)
    this.value = "";
  }

  /* autocomplete gif service */
  autocomplete = (value: string) => {
    this.gifService
      .autocomplete(value)
      .subscribe(data => {
        this.suggestions = data
        this.showSuggestions = true;
      })
  }

  /* execute the service with debounce */
  debounceAutocomplete = (value: string) => {
    this.autocomplete(value);
  }

  /* when user clicks on suggestion */
  updateValue = (suggestion: string) => {
    this.value = suggestion;
    this.showSuggestions = false;
  }

  /* executed on escape keypress */
  resetInput = () => {
    this.value = "";
    this.showSuggestions = false;
    this.open = false;
  }

  ngOnInit(): void {

  }
}
