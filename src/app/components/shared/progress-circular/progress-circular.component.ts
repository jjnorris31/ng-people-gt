import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-progress-circular',
  templateUrl: './progress-circular.component.html',
  styleUrls: ['./progress-circular.component.css']
})
export class ProgressCircularComponent {
  @Input() visible!: boolean | null;
}
