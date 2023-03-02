import { Component } from '@angular/core';
import {People} from "../../../interfaces/people.interface";
import {Observable} from "rxjs";
import {select, Store} from '@ngrx/store';
import {selectPeople, selectPerson, selectSelectedPerson} from "../../../store/people/people.selectors";

@Component({
  selector: 'app-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.css']
})
export class PeopleTableComponent {

  people$: Observable<People[]>;
  constructor(private store: Store<{people: People[]}>) {
    this.people$ = this.store.pipe(select(selectPeople));
  }

  loadPerson() {
    this.store.pipe(select(selectSelectedPerson)).subscribe(person => {
      if (person) {
        this.store.dispatch({
          type: '[People Page] Load Person',
          url: person.url
        });
      }
    });
  }
}
