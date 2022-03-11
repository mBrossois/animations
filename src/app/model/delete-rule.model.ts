export class DeleteRuleModel {
  id: string;
  name: string;
  ruleProperties: Array<RuleProperties>;
}

export class RuleProperties {
  priceRangeMin: string;
  priceRangeCeiling: string;
  commissionFixedCharge: Amount;
  commissionPercentage: number;
}

export class Amount {
  amount: string;
  currency = 'EUR';
}

export class NodesModel {
  ruleName: string;
  nodes: Array<NodeModel>;
}

export class NodeModel {
  id: string;
  name: string;
  depth: string;
  brand: string;
}
