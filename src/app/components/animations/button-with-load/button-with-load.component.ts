import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-button-with-load',
  templateUrl: './button-with-load.component.html',
  styleUrls: ['./button-with-load.component.scss']
})
export class ButtonWithLoadComponent implements AfterViewInit {

  @Input() play: string;
  @ViewChild('checkmarkPath') checkmark: ElementRef;


  constructor() { }

  ngAfterViewInit(): void {
    const length = this.checkmark.nativeElement.getTotalLength();
    console.log('The length of the checkmark is', length);

  }

}
