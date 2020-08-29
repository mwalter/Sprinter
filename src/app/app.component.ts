import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {environment} from '../environments/environment';
import {v4 as uuid} from 'uuid';
import {MemberAddComponent} from './member-add/member-add.component';
import {CalculationService} from './service/calculation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild(MemberAddComponent) memberAddComponent: MemberAddComponent;

  title = 'Sprinter';

  appVersion = environment.version;

  form: FormGroup;

  sprintLength = 2; // weeks

  members = new Map<string, number>();

  max: number;

  teamAvailability = 0;
  workingDaysInSprint = 0;
  ratio = 0;

  constructor(private calculationService: CalculationService) {
  }

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
    const result = this.calculationService.calculate(this.members, this.form.controls.spareTime.value,
      this.sprintLength, this.form.controls.holidays.value);
    this.teamAvailability = result.teamAvailability;
    this.workingDaysInSprint = result.workingDaysInSprint;
    this.ratio = result.ratio;
  }

  resetSprint(): void {
    this.memberAddComponent.resetForm();
    this.sprintLength = 2;
    this.form.controls.spareTime.setValue(0);
    this.form.controls.holidays.setValue(0);
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
