import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {faEraser, faPlus} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-member-add',
  templateUrl: './member-add.component.html',
  styleUrls: ['./member-add.component.css']
})
export class MemberAddComponent implements OnInit {

  @Input() sprintLength;
  @Output() add = new EventEmitter<number>();
  @Output() clear = new EventEmitter();

  faEraser = faEraser;
  faPlus = faPlus;

  max: number;

  form: FormGroup;

  ngOnInit(): void {
    this.max = this.sprintLength * 5;

    this.form = new FormGroup({
      availability: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(this.max)
      ])
    });
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

  clearSprint() {
    this.clear.emit();
  }
}
