import {Component, Input, OnInit} from '@angular/core';
import {DeleteRuleModel, NodesModel} from "../../../model/delete-rule.model";

@Component({
  selector: 'app-delete',
  templateUrl: './ruleset.component.html',
  styleUrls: ['./ruleset.component.scss']
})
export class RulesetComponent implements OnInit {

  @Input() play: string;

  ruleModelOpen: true;

  clickedId: Array<string> = [];
  moveUp: Array<string> = [];
  expandRules: Array<string> = [];

  rules: Array<DeleteRuleModel>;

  nodes: NodesModel;

  constructor() {
  }

  ngOnInit(): void {
    this.rules = [{
      name: 'Water sports',
      id: '1',
      ruleProperties: [
        {
          commissionFixedCharge: {amount: '1', currency: 'EUR'},
          commissionPercentage: 1,
          priceRangeCeiling: "10",
          priceRangeMin: "0"
        },
        {
          commissionFixedCharge: {amount: '1', currency: 'EUR'},
          commissionPercentage: 1,
          priceRangeCeiling: "20",
          priceRangeMin: "10"
        },
        {
          commissionFixedCharge: {amount: '1', currency: 'EUR'},
          commissionPercentage: 1,
          priceRangeCeiling: undefined,
          priceRangeMin: "30"
        }

      ]

    },
      {
        id: '12',
        name: 'Electrical gardening',
        ruleProperties: [
          {
            commissionFixedCharge: {amount: '1', currency: 'EUR'},
            commissionPercentage: 1,
            priceRangeCeiling: "10",
            priceRangeMin: "0"
          },
          {
            commissionFixedCharge: {amount: '1', currency: 'EUR'},
            commissionPercentage: 1,
            priceRangeCeiling: "20",
            priceRangeMin: "10"
          },
          {
            commissionFixedCharge: {amount: '1', currency: 'EUR'},
            commissionPercentage: 1,
            priceRangeCeiling: undefined,
            priceRangeMin: "30"
          }

        ]
      },
      {
        id: '14',
        name: 'Fashion',
        ruleProperties: [
          {
            commissionFixedCharge: {amount: '1', currency: 'EUR'},
            commissionPercentage: 1,
            priceRangeCeiling: "10",
            priceRangeMin: "0"
          },
          {
            commissionFixedCharge: {amount: '1', currency: 'EUR'},
            commissionPercentage: 1,
            priceRangeCeiling: "20",
            priceRangeMin: "10"
          },
          {
            commissionFixedCharge: {amount: '1', currency: 'EUR'},
            commissionPercentage: 1,
            priceRangeCeiling: undefined,
            priceRangeMin: "30"
          }

        ]
      }];

    this.nodes = {
      ruleName: 'Electrical gardening',
      nodes: [
        {
          id: '101210121',
          name: 'GPC',
          depth: 'GPC',
          brand: null
        },
        {
          id: '11221123',
          name: 'Gardening',
          depth: 'GPC > Gardening',
          brand: null
        },
        {
          id: '12312331',
          name: 'Grasmaaier',
          depth: 'GPC > Lawn/Garden Supplies > Lawn/Garden Supplies > Tuingereedschap > Grasmaaiers/Verticuteermachines > Grasmaaier',
          brand: null
        },
        {
          id: '121312312',
          name: 'Zaagbok',
          depth: 'GPC > Lawn/Garden Supplies > Lawn/Garden Supplies > Motorgestuurd tuingereedschap > Kettingzagen > Zaagbok',
          brand: 'Jimmies zagen'
        },
        {
          id: '11231221',
          name: 'Houtkloof machines',
          depth: 'GPC > Lawn/Garden Supplies > Lawn/Garden Supplies > Motorgestuurd tuingereedschap > Houtkloofmachines',
          brand: null
        }
      ]
    };
  }

  transitionEnd(e: Event, ruleId: string = null) {
    const classList = (e.target as Element).classList;
    if (classList.contains('rule') && classList.contains('delete')) {
      this.rules = this.rules.filter(item => item.id !== ruleId);
      this.clickedId = this.clickedId.filter(item => item !== ruleId);
    }
  }

  removeExpand(name: string) {
    if (this.expandRules.includes(name)) {
      this.expandRules = this.expandRules.filter(item => item !== name);
    }
  }

  onDelete(rule: DeleteRuleModel) {
    if (this.play === 'play') {
      this.clickedId.push(rule.id);
      this.removeExpand(rule.name);
    }
  }

}
