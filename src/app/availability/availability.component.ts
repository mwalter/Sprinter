import {Component, Input, Output, EventEmitter} from '@angular/core';

import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css']
})
export class AvailabilityComponent {

  @Input() members: Map<string, number>;
  @Input() teamAvailability: number;
  @Input() workingDaysInSprint: number;
  @Input() ratio: number;
  @Output() reset = new EventEmitter();

  faTrashAlt = faTrashAlt;

  resetAll(): void {
    this.reset.emit();
  }
}
