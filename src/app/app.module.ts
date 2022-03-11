// Angular
import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

// Components
import {HeaderComponent} from './components/_shared/header/header.component';

// tabs
import {TitleComponent} from './components/animations/title/title.component';
import {ShoppingCartComponent} from './components/animations/shopping-cart/shopping-cart.component';
import {TapComponent} from './components/animations/tap/tap.component';
import {RocketComponent} from './components/animations/rocket/rocket.component';
import {ControlsComponent} from './components/_shared/controls/controls.component';
import {PlayButtonComponent} from './components/animations/play-button/play-button.component';
import {NextButtonComponent} from './components/animations/next-button/next-button.component';
import {PreviousButtonComponent} from './components/animations/previous-button/previous-button.component';
import {ZoomInComponent} from './components/animations/zoom-in/zoom-in.component';
import {ZoomOutComponent} from './components/animations/zoom-out/zoom-out.component';
import {PhoneComponent} from './components/animations/phone/phone.component';

// Service
import {AnimationStatusService} from "./service/animation-status.service";
import {ButtonWithLoadComponent} from './components/animations/button-with-load/button-with-load.component';


@NgModule({
    declarations: [
        AppComponent,
        TitleComponent,
        ShoppingCartComponent,
        HeaderComponent,
        TapComponent,
        RocketComponent,
        ControlsComponent,
        PlayButtonComponent,
        NextButtonComponent,
        PreviousButtonComponent,
        ZoomInComponent,
        ZoomOutComponent,
        PhoneComponent,
        ButtonWithLoadComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    providers: [AnimationStatusService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
