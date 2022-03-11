import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.scss']
})
export class RocketComponent implements OnInit {

  @Input() play: string;

  launch = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
