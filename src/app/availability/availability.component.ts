import {Component, Input} from '@angular/core';

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

}
