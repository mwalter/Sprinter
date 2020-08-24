import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SimpleChange} from '@angular/core';
import {MemberAddComponent} from './member-add.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';

describe('MemberAddComponent', () => {
  let component: MemberAddComponent;
  let fixture: ComponentFixture<MemberAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MemberAddComponent, FaIconComponent],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberAddComponent);
    component = fixture.componentInstance;
    component.sprintLength = 2;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set max to 10 if sprintLength is 2', () => {
    expect(component.max).toBe(10);
  });

  it('should raise add event when method addMember() is called with valid availability', () => {
    spyOn(component.add, 'emit');
    component.form.controls.availability.setValue(7);

    component.addMember();
    expect(component.add.emit).toHaveBeenCalled();
  });

  it('should not raise add event when method addMember() is called with invalid availability', () => {
    spyOn(component.add, 'emit');
    component.holidays = 0;
    component.ngOnChanges({
      sprintLength: new SimpleChange(null, 'holidays', null)
    });
    fixture.detectChanges();
    component.form.controls.availability.setValue(17);

    component.addMember();
    expect(component.add.emit).not.toHaveBeenCalled();
  });

  it('should change max availability value when sprint length has changed', () => {
    expect(component.max).toBe(10); // default 2 weeks

    component.sprintLength = 3;
    component.ngOnChanges({
      sprintLength: new SimpleChange(null, 'sprintLength', null)
    });
    fixture.detectChanges();
    expect(component.max).toBe(15);
  });

  it('should raise add event when method addMember() is called with valid availability and holidays', () => {
    spyOn(component.add, 'emit');
    component.holidays = 3;
    component.ngOnChanges({
      holidays: new SimpleChange(null, 'holidays', null)
    });
    fixture.detectChanges();
    component.form.controls.availability.setValue(7);

    component.addMember();
    expect(component.add.emit).toHaveBeenCalled();
  });

  it('should not raise add event when method addMember() is called with invalid availability and holidays', () => {
    spyOn(component.add, 'emit');
    component.holidays = 5;
    component.ngOnChanges({
      holidays: new SimpleChange(null, 'holidays', null)
    });
    fixture.detectChanges();
    component.form.controls.availability.setValue(9);

    component.addMember();
    expect(component.add.emit).not.toHaveBeenCalled();
  });
});
