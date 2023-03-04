import { createReducer, on } from '@ngrx/store';
import {setPeople, setSelectedPerson, setPerson, clearPeople, setLoadingPeople} from './people.actions';
import {People} from "../../interfaces/people.interface";

export interface PeopleState {
  people: People[];
  selectedPerson?: People
  person?: People
  loadingPeople: boolean;
}

export const initialState: PeopleState = {
  people: [],
  loadingPeople: false
}

export const peopleReducer = createReducer(
  initialState,
  on(setPeople, (state, {people}) => ({...state, people: state.people.concat(people)})),
  on(setLoadingPeople, (state, {loadingPeople}) => {
    return ({...state, loadingPeople: loadingPeople});
  }),
  on(clearPeople, (state) => ({...state, people: []})),
  on(setSelectedPerson, (state, {person}) => ({...state, selectedPerson: person})),
  on(setPerson, (state, {person}) => ({...state, person: person}))
);
