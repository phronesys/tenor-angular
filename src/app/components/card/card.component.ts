import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
  @Input() id: number = NaN;
  @Input() description: string = "";
  @Input() gifUrl: string = "";
  @Input() gifUrlTiny: string = "";
  @Input() tenorUrl: string = "";

  ngOnInit(): void {
  }

}
