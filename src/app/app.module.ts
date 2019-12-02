import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import { User3Component } from './components/user3/user3.component';
import { BoutiqueComponent } from './components/boutique/boutique.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    User3Component,
    BoutiqueComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
