import {Component, Input, OnInit} from '@angular/core';
import {NodesModel} from "../../../../model/delete-rule.model";

@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.scss']
})
export class NodesComponent implements OnInit {

  @Input() ruleModelOpen: boolean;
  @Input() nodes: NodesModel;

  expandRules: Array<string> = [];

  hoverAdd = false;

  openAddNode = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  removeExpand(name: string) {
    if (this.expandRules.includes(name)) {
      this.expandRules = this.expandRules.filter(item => item !== name);
    }
  }

}
