import { createAction, props } from '@ngrx/store';
import {People} from "../../interfaces/people.interface";

export const setPeople = createAction('[People Component] Set People', props<{people: People[]}>());
