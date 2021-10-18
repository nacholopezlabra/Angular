import { HtmlParser } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { heoresComponent} from './Heroes/heroe.component';

@NgModule({
  declarations: [
    AppComponent,
    heoresComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [heoresComponent]
})
export class AppModule { }
