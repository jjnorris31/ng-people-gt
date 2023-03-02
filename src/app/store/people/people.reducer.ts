import { createReducer, on } from '@ngrx/store';
import { setPeople, setSelectedPerson } from './people.actions';
import {People} from "../../interfaces/people.interface";

export interface PeopleState {
  people: People[];
  selectedPerson?: People
}

export const initialState: PeopleState = {
  people: [],
}

export const peopleReducer = createReducer(
  initialState,
  on(setPeople, (state, {people}) => ({...state, people: people})),
  on(setSelectedPerson, (state, {person}) => ({...state, selectedPerson: person}))
);
