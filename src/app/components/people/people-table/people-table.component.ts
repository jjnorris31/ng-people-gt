import { Component } from '@angular/core';
import {PeopleService} from "../../../services/people.service";
import {People} from "../../../interfaces/people.interface";
import {Observable} from "rxjs";
import { Store } from '@ngrx/store';
import {setPeople} from "../../../store/people/people.actions";

@Component({
  selector: 'app-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.css']
})
export class PeopleTableComponent {

  people$: Observable<People[]> = this.store.select('people');
  constructor(private peopleService: PeopleService, private store: Store<{people: People[]}>) {}
}
