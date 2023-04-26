import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { PrimeComponentsModule } from './prime-components/prime-components.module';
import { PublicModuleModule } from './public-module/public-module.module';


@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PrimeComponentsModule,
    PublicModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
