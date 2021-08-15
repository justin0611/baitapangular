import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectiveModule } from './Directive/Directive.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,DirectiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
