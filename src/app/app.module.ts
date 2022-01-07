import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { SvgSearchComponent } from './components/svg/svg-search/svg-search.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    SvgSearchComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
