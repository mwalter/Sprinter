import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {faUserPlus} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-member-add',
  templateUrl: './member-add.component.html',
  styleUrls: ['./member-add.component.css']
})
export class MemberAddComponent implements OnInit, OnChanges {

  @Input() sprintLength: number;
  @Input() holidays: number;
  @Output() add = new EventEmitter<number>();

  faUserPlus = faUserPlus;

  max: number;

  form: FormGroup;

  ngOnInit(): void {
    this.setupValidation();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setupValidation();
  }

  get availability() {
    return this.form.get('availability');
  }

  addMember() {
    if (!this.form.valid) {
      return;
    }

    if (this.form.controls.availability.value) {
      this.add.emit(this.form.controls.availability.value);
    }
  }

  resetForm(): void {
    this.form.reset();
  }

  private setupValidation(): void {
    this.max = this.sprintLength * 5;

    this.form = new FormGroup({
      availability: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(this.max - this.holidays)
      ])
    });
  }
}
