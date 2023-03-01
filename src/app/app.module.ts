import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/people/search-bar/search-bar.component';
import {HttpClientModule} from "@angular/common/http";
import { PeopleTableComponent } from './components/people/people-table/people-table.component';

import { StoreModule } from '@ngrx/store';
import { peopleReducer } from './store/people/people.reducer';
import {PeopleEffects} from "./store/people/people.effects";
import { EffectsModule } from '@ngrx/effects';
import { PeopleCardComponent } from './components/people/people-card/people-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    PeopleTableComponent,
    PeopleTableComponent,
    PeopleCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot( {people: peopleReducer}),
    EffectsModule.forRoot([PeopleEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
