import {Component, OnInit} from '@angular/core';
import {AnimationStatusService} from "../../../service/animation-status.service";

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {

  status = 'stop';

  constructor(private animationStatus: AnimationStatusService) {
  }

  ngOnInit(): void {
  }

  zoomClicked(zoom: number) {
    this.animationStatus.updateScale(zoom);
  }

  statusClicked(status: string) {
    this.animationStatus.updateStatus(status);
    this.animationStatus.getStatus().subscribe( value => {
      this.status = value;
    });
  }

}
