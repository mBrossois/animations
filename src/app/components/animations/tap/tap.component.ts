import {AfterViewInit, Component, DoCheck, ElementRef, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'app-sink',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements AfterViewInit, DoCheck {

  @Input() play: string;

  @ViewChild('middlePart') middleKnob: ElementRef;

  animationActive = false;

  startPlaying = false;

  constructor() {
  }

  ngDoCheck() {
    if (this.play === 'play' && !this.animationActive) {
      this.startPlaying = true;
    } else if (this.play === 'stop') {
      this.startPlaying = false;
    }
  }

  ngAfterViewInit() {

    this.middleKnob.nativeElement.addEventListener("transitionstart", () => {
      if (this.startPlaying) {
        this.animationActive = true;
      }
    });

    this.middleKnob.nativeElement.addEventListener("transitionend", () => {
      if (!this.startPlaying) {
        this.animationActive = false;
      }
    });
  }

}
