import {createFeatureSelector, createSelector} from '@ngrx/store';
import {PeopleState} from "./people.reducer";
export interface AppState {
  people: PeopleState;
}

export const selectPeopleState =  createFeatureSelector<PeopleState>('people');

export const selectPeople = createSelector(
  selectPeopleState,
  (state: PeopleState) => state.people
);

export const selectPerson = createSelector(
  selectPeopleState,
  (state: PeopleState) => state.person
)
