import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PeopleFilter, PeopleResponse} from "../interfaces/people.interface";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  configURL: string = "https://swapi.dev/api/people?";
  people: any[] = [];
  constructor(private http: HttpClient) {

  }

  getPeople(filter: PeopleFilter) {
    let url = this.configURL;

    if (filter.search) {
      url += `search${filter.search}&`
    }

    this.http.get<PeopleResponse>(url).subscribe((response) => {
      console.log(response.results);
    })
  }
}
