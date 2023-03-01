import {Component, Input} from '@angular/core';
import {People} from "../../../interfaces/people.interface";

@Component({
  selector: 'app-people-card',
  templateUrl: './people-card.component.html',
  styleUrls: ['./people-card.component.css']
})
export class PeopleCardComponent {

  @Input() person!: People;

}
