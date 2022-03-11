import {Component, OnDestroy} from '@angular/core';
import {AnimationStatusService} from "./service/animation-status.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  title = 'animations';
  scale: number;
  status: string;

  component: any;

  scaleObservable: Subscription;
  statusObservable: Subscription;

  constructor(private animationStatus: AnimationStatusService,
              private router: Router) {
    this.scaleObservable = this.animationStatus.getScale().subscribe(scale => {
      this.scale = scale;
    });

    this.statusObservable = this.animationStatus.getStatus().subscribe(status => {
      this.status = status;
      if (status === 'play' || status === 'stop') {
        this.component.play = status;
      }
    });
  }

  onOutletLoaded(component) {
    this.component = component;
  }

  ngOnDestroy() {
    this.scaleObservable.unsubscribe();
    this.statusObservable.unsubscribe();
  }
}
