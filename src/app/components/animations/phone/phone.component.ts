import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ScreenStatusModel} from "../../../model/screen-status.model";

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit, AfterViewInit {

  @Input() play: string;

  @ViewChild('hand') hand: ElementRef;

  displayScreen: ScreenStatusModel;

  handAnimation = false;

  constructor() {
  }

  ngOnInit(): void {
    this.displayScreen = {
      on: false,
      off: true,
      broken: false
    };
  }

  ngAfterViewInit(): void {

  this.hand.nativeElement.addEventListener("transitionend", () => {
      if (this.handAnimation) {
        this.handAnimation = false;
      }
    });
  }

  onSwitchOnOff() {
    if (this.play === 'play' && !this.handAnimation && (this.displayScreen.on || this.displayScreen.off)) {
      this.displayScreen.on = !this.displayScreen.on;
      this.displayScreen.off = !this.displayScreen.off;
      this.handAnimation = true;
    }
  }

  onBreakClick() {
    if (this.play === 'play' && this.displayScreen.broken) {
      this.displayScreen = {on: false, off: true, broken: false};
    } else if (this.play === 'play') {
      this.displayScreen = {on: false, off: false, broken: true};
    }
  }

}
