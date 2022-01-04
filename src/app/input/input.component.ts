import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass']
})
export class InputComponent implements OnInit {
  @Input() open: string;
  constructor() {
    this.open = ""
  }
  search() {
    this.open !== "open" ? this.open = "open" : this.open = ""
  }
  ngOnInit(): void {

  }

}
