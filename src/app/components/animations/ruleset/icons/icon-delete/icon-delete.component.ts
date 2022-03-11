import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'icon-delete',
  templateUrl: './icon-delete.component.html',
  styleUrls: ['./icon-delete.component.scss']
})
export class IconDeleteComponent implements OnInit {

  @Input() delete: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
