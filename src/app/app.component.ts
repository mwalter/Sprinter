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

  max: number;

  teamAvailability = 0;
  workingDaysInSprint = 0;
  diff = 0;

  ngOnInit(): void {
    this.setupValidation();
  }

  addMember(availability: number): void {
    this.members.set(uuid(), availability);
    this.calculate();
  }

  removeMember(key: string): void {
    this.members.delete(key);
    this.calculate();
  }

  resetValidatorsAndCalculate() {
    this.max = this.sprintLength * 5;

    this.form.controls.holidays.setValidators([
      Validators.required,
      Validators.min(0),
      Validators.max(this.max)
    ]);
    this.form.controls.holidays.updateValueAndValidity();
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
    const holidays = this.form.controls.holidays.value;
    const totalWorkingDays = (workingDays - holidays) * this.members.size;

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

  get holidays() {
    return this.form.get('holidays');
  }

  private setupValidation(): void {
    this.max = this.sprintLength * 5;

    this.form = new FormGroup({
      spareTime: new FormControl(0, [
        Validators.min(0),
        Validators.max(100)
      ]),
      holidays: new FormControl(0, [
        Validators.required,
        Validators.min(0),
        Validators.max(this.max)
      ])
    });
  }

}
