import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {concatMap, EMPTY, tap} from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import {loadedPeopleSuccess, setLoadingPeople, setPeople, setPerson} from "./people.actions";
import { PeopleService } from '../../services/people.service';

@Injectable()
export class PeopleEffects {

  loadPeople$ = createEffect(() => this.actions$.pipe(
      ofType('[People Page] Load People'),
      exhaustMap((action: any) => this.peopleService.getPeople({
        search: action.search,
        page: action.page
      })
        .pipe(
          map(response => {
            return loadedPeopleSuccess({people: response.results})
          }),
          catchError(() => EMPTY),
        )),
    )
  );

  showLoadingPeople$ = createEffect(() => this.actions$.pipe(
      ofType('[People Page] Load People'),
    map(response => setLoadingPeople({loadingPeople: true})),
    )
  );

  loadPeopleSuccess$ = createEffect(() => this.actions$.pipe(
    ofType('[People Component] Load People Success'),
    map((response: any) => setPeople({people: response.people}))
  ));

  hideLoadingPeople$ = createEffect(() => this.actions$.pipe(
      ofType('[People Component] Load People Success'),
      map(response => setLoadingPeople({loadingPeople: false})),
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
