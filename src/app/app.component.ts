import { Component, OnInit } from '@angular/core';
import { GifService } from './services/gif.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  data: Array<any> = [];
  constructor(private gifService: GifService) { }

  inputSearch(value: any) {
    console.log(value);
  }
  ngOnInit(): void {
    this.gifService.search("uwu")
      .subscribe(data => {
        this.data = data;
      });
  }
}
