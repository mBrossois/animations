import {BehaviorSubject} from "rxjs";

export class AnimationStatusService {
  private scale: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  private status: BehaviorSubject<string> = new BehaviorSubject<string>('pauzed');

  public getScale() {
    return this.scale.asObservable();
  }

  public getStatus() {
    return this.status.asObservable();
  }

  public updateScale(scale: number) {
    scale = this.scale.getValue() + scale;
    this.scale.next(scale);
  }


  public updateStatus(status: string) {
    if (status === 'play' && this.status.getValue() === status) {
      this.status.next('stop');
    } else {
      this.status.next(status);
    }

  }


}
