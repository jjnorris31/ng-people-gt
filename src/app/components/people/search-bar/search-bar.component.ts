import { Component } from '@angular/core';
import {PeopleService} from "../../../services/people.service";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  constructor(private peopleService: PeopleService) {
  }
  getPeople() : void {
    console.log("get people!");
    this.peopleService.getPeople({});
  }
}
