import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { SvgSearchComponent } from './svg/svg-search/svg-search.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    SvgSearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
