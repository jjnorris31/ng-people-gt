import { createAction, props } from '@ngrx/store';
import {People} from "../../interfaces/people.interface";

export const setPeople = createAction('[People Component] Set People',
  props<{people: People[]}>());
export const setSelectedPerson = createAction('[People Component] Set Selected Person',
  props<{person: People}>());
