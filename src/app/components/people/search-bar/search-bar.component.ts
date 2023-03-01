import { Component } from '@angular/core';
import {PeopleService} from "../../../services/people.service";
import {setPeople} from "../../../store/people/people.actions";
import {Observable} from "rxjs";
import {People} from "../../../interfaces/people.interface";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  people$: Observable<People[]>

  constructor(private peopleService: PeopleService, private store: Store<{people: People[]}>) {
    this.people$ = this.store.select('people');
  }
  public getPeople() {
    this.peopleService.getPeople({}).subscribe((response) => {
      console.log(response.results);
      this.store.dispatch(setPeople({people: response.results}));
    })
  }
}
