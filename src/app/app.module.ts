import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { TwAppComponent } from './twapp.component';
import { OnOffComponent } from './on-off/on-off.component';

@NgModule({
  declarations: [TwAppComponent, OnOffComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [TwAppComponent],
})
export class AppModule {}
