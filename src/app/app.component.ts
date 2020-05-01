import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {environment} from '../environments/environment';
import {v4 as uuid} from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Sprinter';

  appVersion = environment.version;

  form: FormGroup;

  sprintLength = 2; // weeks

  members = new Map<string, number>();

  teamAvailability = 0;
  workingDaysInSprint = 0;
  diff = 0;

  ngOnInit(): void {
    this.form = new FormGroup({
      spareTime: new FormControl(0, [
        Validators.min(0),
        Validators.max(100)
      ])
    });
  }

  addMember(availability: number): void {
    this.members.set(uuid(), availability);
    this.calculate();
  }

  removeMember(key: string): void {
    this.members.delete(key);
    this.calculate();
  }

  calculate(): void {
    let result = 0.0;
    for (const availability of this.members.values()) {
      result += availability;
    }

    const spareTime = this.form.controls.spareTime.value;
    if (spareTime > 0) {
      result = result * (1.0 - (spareTime / 100));
    }

    this.teamAvailability = result;

    const workingDays = this.sprintLength * 5; // working 5 days a week
    const totalWorkingDays = workingDays * this.members.size;

    this.workingDaysInSprint = totalWorkingDays;
    this.diff = this.teamAvailability / totalWorkingDays;
  }

  resetSprint(): void {
    this.sprintLength = 2;
    this.form.controls.spareTime.setValue(0);
    this.members.clear();
    this.calculate();
  }

  get spareTime() {
    return this.form.get('spareTime');
  }
}
