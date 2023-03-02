import { createReducer, on } from '@ngrx/store';
import { setPeople, setSelectedPerson, setPerson } from './people.actions';
import {People} from "../../interfaces/people.interface";

export interface PeopleState {
  people: People[];
  selectedPerson?: People
  person?: People
}

export const initialState: PeopleState = {
  people: [],
}

export const peopleReducer = createReducer(
  initialState,
  on(setPeople, (state, {people}) => ({...state, people: people})),
  on(setSelectedPerson, (state, {person}) => ({...state, selectedPerson: person})),
  on(setPerson, (state, {person}) => ({...state, person: person}))
);
