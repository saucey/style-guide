import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NullUndefinedEmpty } from './directives/NullUndefinedEmpty/NullUndefinedEmpty';


@NgModule({
  declarations: [
    AppComponent,
    NullUndefinedEmpty
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
