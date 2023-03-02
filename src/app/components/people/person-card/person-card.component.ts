import {Component, Input} from '@angular/core';
import {People} from "../../../interfaces/people.interface";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {selectPerson} from "../../../store/people/people.selectors";

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent {
  person$: Observable<People | undefined>;

  constructor(private store: Store<{person: People}>) {
    this.person$ = this.store.pipe(select(selectPerson));
  }
}
