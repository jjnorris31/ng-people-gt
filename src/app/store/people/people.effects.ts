import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import {setPeople} from "./people.actions";
import { PeopleService } from '../../services/people.service';

@Injectable()
export class PeopleEffects {

  loadPeople$ = createEffect(() => this.actions$.pipe(
      ofType('[People Page] Load People'),
      exhaustMap(() => this.peopleService.getPeople({})
        .pipe(
          map(response => setPeople({people: response.results})),
          catchError(() => EMPTY)
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private peopleService: PeopleService
  ) {}
}
