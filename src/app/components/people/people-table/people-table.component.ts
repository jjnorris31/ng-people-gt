import { Component } from '@angular/core';
import {People} from "../../../interfaces/people.interface";
import {Observable} from "rxjs";
import {select, Store} from '@ngrx/store';
import {
  selectLoadingPeople,
  selectPeople,
  selectSelectedPerson
} from "../../../store/people/people.selectors";

@Component({
  selector: 'app-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.css']
})
export class PeopleTableComponent {

  people$: Observable<People[]>;
  loadingPeople$: Observable<boolean>;
  page: number = 1;
  constructor(private store: Store<{people: People[]}>) {
    this.people$ = this.store.pipe(select(selectPeople));
    this.loadingPeople$ = this.store.pipe(select(selectLoadingPeople));
  }

  loadPerson() {
    const subscription = this.store.pipe(select(selectSelectedPerson)).subscribe(person => {
      if (person) {
        this.store.dispatch({
          type: '[People Page] Load Person',
          url: person.url
        });
      }
    });
    subscription.unsubscribe();
  }

  onScroll() {
    this.page++;
    this.store.dispatch({
      type: '[People Page] Load People',
      page: this.page
    });
  }
}
