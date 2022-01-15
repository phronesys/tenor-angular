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
  constructor(private gifService: GifService) { }

  /* services methods */
  search = (keyword: string) => {
    this.gifService
      .search(keyword)
      .subscribe(data => this.data = data);
  }

  /* handle events */
  inputSearch(value: string) {
    this.keyword = value;
    this.search(value);
  }

  ngOnInit(): void {
    this.search(this.keyword);
  }
}
