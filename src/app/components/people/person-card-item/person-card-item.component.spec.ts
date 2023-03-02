import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonCardItemComponent } from './person-card-item.component';

describe('PersonCardItemComponent', () => {
  let component: PersonCardItemComponent;
  let fixture: ComponentFixture<PersonCardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonCardItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
