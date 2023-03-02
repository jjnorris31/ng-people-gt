import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import {setPeople, setPerson} from "./people.actions";
import { PeopleService } from '../../services/people.service';

@Injectable()
export class PeopleEffects {

  loadPeople$ = createEffect(() => this.actions$.pipe(
      ofType('[People Page] Load People'),
      exhaustMap((action: any) => this.peopleService.getPeople({
        search: action.search
      })
        .pipe(
          map(response => setPeople({people: response.results})),
          catchError(() => EMPTY)
        ))
    )
  );

  loadPerson$ = createEffect(() => this.actions$.pipe(
      ofType('[People Page] Load Person'),
      exhaustMap((action: any) => this.peopleService.getPerson(action.url)
        .pipe(
          map(response => setPerson({person: response})),
          catchError(() => EMPTY)
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private peopleService: PeopleService
  ) {}
}
