import {Component, Input} from '@angular/core';
import {People} from "../../../interfaces/people.interface";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {selectSelectedPerson} from "../../../store/people/people.selectors";
import {setPerson, setSelectedPerson} from "../../../store/people/people.actions";

@Component({
  selector: 'app-table-people-card',
  templateUrl: './people-table-card.component.html',
  styleUrls: ['./people-table-card.component.css']
})
export class PeopleTableCardComponent {
  @Input() person!: People;

  personSelected$: Observable<People | undefined>;

  constructor(private store: Store<{person: People}>) {
    this.personSelected$ = this.store.pipe(select(selectSelectedPerson));
  }

  onSelectPerson() {
    this.store.dispatch(setPerson({person: undefined}));
    this.store.dispatch(setSelectedPerson({person: this.person}));
  }
}
