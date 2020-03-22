import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NglrxPipesModule } from '@nglrx/pipes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NglrxPipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
