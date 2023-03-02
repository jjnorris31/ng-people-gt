import {Component, Input} from '@angular/core';
import {People} from "../../../interfaces/people.interface";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {selectPerson, selectSelectedPerson} from "../../../store/people/people.selectors";
import {setSelectedPerson} from "../../../store/people/people.actions";

@Component({
  selector: 'app-people-card',
  templateUrl: './people-card.component.html',
  styleUrls: ['./people-card.component.css']
})
export class PeopleCardComponent {
  @Input() person!: People;

  personSelected$: Observable<People | undefined>;

  constructor(private store: Store<{person: People}>) {
    this.personSelected$ = this.store.pipe(select(selectSelectedPerson));
  }

  onSelectPerson() {
    this.store.dispatch(setSelectedPerson({person: this.person}));
  }
}
