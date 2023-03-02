import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleTableCardComponent } from './people-table-card.component';

describe('PeopleCardComponent', () => {
  let component: PeopleTableCardComponent;
  let fixture: ComponentFixture<PeopleTableCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleTableCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleTableCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
