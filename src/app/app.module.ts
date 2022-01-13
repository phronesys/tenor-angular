import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { SvgSearchComponent } from './components/svg/svg-search/svg-search.component';
import { SvgGifComponent } from './components/svg/svg-gif/svg-gif.component';
import { SvgGiftComponent } from './components/svg/svg-gift/svg-gift.component';
import { LogoComponent } from './components/logo/logo.component';
import { CardComponent } from './components/card/card.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { SuggestionComponent } from './components/input/suggestion/suggestion.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    SvgSearchComponent,
    SvgGifComponent,
    SvgGiftComponent,
    LogoComponent,
    CardComponent,
    CardListComponent,
    SuggestionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
