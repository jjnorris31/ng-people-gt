import { Component } from '@angular/core';
import {People} from "../../../interfaces/people.interface";
import {Store} from "@ngrx/store";
import {setPerson, setSelectedPerson} from "../../../store/people/people.actions";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  search: string = "";

  constructor(private store: Store<{people: People[]}>) {}
  public getPeople() {
    this.store.dispatch(setPerson({person: undefined}));
    this.store.dispatch(setSelectedPerson({person: undefined}));
    this.store.dispatch({
      type: '[People Page] Load People',
      search: this.search
    });
  }
}
