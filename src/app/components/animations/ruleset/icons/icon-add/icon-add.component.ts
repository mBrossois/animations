import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'icon-add',
  templateUrl: './icon-add.component.html',
  styleUrls: ['./icon-add.component.scss']
})
export class IconAddComponent implements OnInit {

  @Input() fill: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
