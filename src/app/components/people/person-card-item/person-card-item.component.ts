import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-person-card-item',
  templateUrl: './person-card-item.component.html',
  styleUrls: ['./person-card-item.component.css']
})
export class PersonCardItemComponent {
  @Input() label!: string;
  @Input() value!: string;

}
