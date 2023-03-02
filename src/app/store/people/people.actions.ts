import { createAction, props } from '@ngrx/store';
import {People} from "../../interfaces/people.interface";

export const setPeople = createAction('[People Component] Set People',
  props<{people: People[]}>());
export const setPerson = createAction('[People Component] Set People',
  props<{person: People}>());
