import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SliderComponent } from './slider/slider.component';
import { FormPayComponent } from './form-pay/form-pay.component';
import { MessagesModule } from 'primeng/messages';

// Step 2: Add the following line...
@NgModule({
  declarations: [AppComponent, SliderComponent, FormPayComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MessagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
