import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImgageDisplayComponent } from './imgage-display/imgage-display.component';


@NgModule({
  declarations: [
    AppComponent,
    ImgageDisplayComponent
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
