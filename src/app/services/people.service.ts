import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {People, PeopleFilter, PeopleResponse} from "../interfaces/people.interface";

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
      url += `search=${filter.search}&`
    }

    if (filter.page) {
      url += `page=${filter.page}&`
    }

    return this.http.get<PeopleResponse>(url);
  }

  getPerson(url: string) {
    return this.http.get<People>(url);
  }
}
