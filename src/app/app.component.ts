import { Component, OnInit } from '@angular/core';
import { GifService } from './services/gif.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  keyword: string = "linux";
  data: Array<any> = [];
  constructor(private gifService: GifService) { }

  search = () => {
    this.gifService.search(this.keyword)
      .subscribe(data => {
        this.data = data;
      });
  }
  inputSearch(value: any) {
    this.keyword = value
    this.search();
  }

  ngOnInit(): void {
    this.search();
  }
}
