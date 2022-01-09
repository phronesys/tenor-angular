import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  response: any;
  constructor(private httpService: HttpService) { }

  inputSearch(value: any) {
    console.log(value);
  }
  ngOnInit(): void {
    this.httpService.getResponse();
  }
}
