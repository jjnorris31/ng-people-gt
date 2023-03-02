import { Component } from '@angular/core';
import {PeopleService} from "../../../services/people.service";
import {People} from "../../../interfaces/people.interface";
import {Observable} from "rxjs";
import {select, Store} from '@ngrx/store';
import {selectPeople} from "../../../store/people/people.selectors";
import {jsDocComment} from "@angular/compiler";

@Component({
  selector: 'app-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.css']
})
export class PeopleTableComponent {

  people$: Observable<People[]>;
  constructor(private peopleService: PeopleService, private store: Store<{people: People[]}>) {
    this.people$ = this.store.pipe(select(selectPeople));
  }
}
