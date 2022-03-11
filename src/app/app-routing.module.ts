import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TitleComponent } from './components/animations/title/title.component';
import { ShoppingCartComponent } from './components/animations/shopping-cart/shopping-cart.component';
import {TapComponent} from "./components/animations/tap/tap.component";
import {RocketComponent} from "./components/animations/rocket/rocket.component";
import {PlayButtonComponent} from "./components/animations/play-button/play-button.component";
import {PreviousButtonComponent} from "./components/animations/previous-button/previous-button.component";
import {NextButtonComponent} from "./components/animations/next-button/next-button.component";
import {PhoneComponent} from "./components/animations/phone/phone.component";
import {RulesetComponent} from "./components/animations/ruleset/ruleset.component";
import {ButtonWithLoadComponent} from "./components/animations/button-with-load/button-with-load.component";

const routes: Routes = [
  {path: 'title', component: TitleComponent},
  {path: 'play-button', component: PlayButtonComponent},
  {path: 'previous-button', component: PreviousButtonComponent},
  {path: 'skip-button', component: NextButtonComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'tap', component: TapComponent},
  {path: 'rocket', component: RocketComponent},
  {path: 'phone', component: PhoneComponent},
  {path: 'ruleset', component: RulesetComponent},
  {path: 'button-with-loading', component: ButtonWithLoadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
