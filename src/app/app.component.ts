import { Component, OnInit } from '@angular/core';
import { GifService } from './services/gif.service';
import { Gif } from './services/Gif';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  keyword: string = "esqueleto dance";
  data: Array<Gif> = [];
  suggestions: Array<string> = [];
  constructor(private gifService: GifService) { }

  /* services methods */
  search = (keyword: string) => {
    this.gifService
      .search(keyword)
      .subscribe(data => this.data = data);
  }

  autocomplete = (keyword: string) => {
    this.gifService
      .autocomplete(keyword)
      .subscribe(data => this.suggestions = data)
  }

  /* handle events */
  inputSearch(value: string) {
    this.keyword = value;
    this.search(value);
  }

  inputAutocomplete(value: string) {
    this.autocomplete(value)
  }

  completeSuggested(suggestion: string) {
    console.log(suggestion);
    
  }

  ngOnInit(): void {
    this.search(this.keyword);
  }
}
