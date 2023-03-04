import { createAction, props } from '@ngrx/store';
import {People} from "../../interfaces/people.interface";

export const setPeople = createAction('[People Component] Set People',
  props<{people: People[]}>());

export const loadedPeopleSuccess = createAction('[People Component] Load People Success',
  props<{people: People[]}>());
export const setSelectedPerson = createAction('[People Component] Set Selected Person',
  props<{person: People | undefined}>());

export const setPerson = createAction('[People Component] Set Person',
  props<{person: People | undefined}>());

export const setLoadingPeople = createAction('[People Component] Set Loading People',
  props<{loadingPeople: boolean}>());

export const clearPeople = createAction('[People Component] Clear People');
