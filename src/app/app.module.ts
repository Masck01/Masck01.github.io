import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { AppRoutingModule } from './app-routing.module';
import { TwAppComponent } from './twapp.component';
import { OnOffComponent } from './on-off/on-off.component';
import { BonoState } from '../shared/bono.state';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [TwAppComponent, OnOffComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([BonoState], {
      developmentMode: !environment.production,
    }),
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production,
    }),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [TwAppComponent],
})
export class AppModule {}
