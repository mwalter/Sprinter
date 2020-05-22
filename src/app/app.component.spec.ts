import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Sprinter'`, () => {
    expect(component.title).toEqual('Sprinter');
  });

  it('should add to map when method addMember() is called', () => {
    expect(component.members.size).toBe(0);

    component.addMember(8);
    component.addMember(7);
    expect(component.members.size).toBe(2);
  });

  it('should remove from map when method removeMember() is called', () => {
    component.addMember(8);
    component.addMember(7);
    expect(component.members.size).toBe(2);

    const keys = component.members.keys();
    const key = keys.next();
    component.removeMember(key.value);
    expect(component.members.size).toBe(1);
    expect(component.members.get(key.value)).toBeUndefined();
  });

  it('should calculate availability when method addMember() is called', () => {
    component.addMember(8);

    expect(component.workingDaysInSprint).toBe(10);
    expect(component.teamAvailability).toBe(8);
    expect(component.ratio).toBe(component.teamAvailability / component.workingDaysInSprint);
  });

  it('should reset all fields when method resetSprint() is called', () => {
    component.sprintLength = 4;
    component.spareTime.setValue(15);
    component.holidays.setValue(2);
    component.addMember(8);
    expect(component.sprintLength).toBe(4);
    expect(component.spareTime.value).toBe(15);
    expect(component.holidays.value).toBe(2);
    expect(component.members.size).toBe(1);

    component.resetSprint();
    expect(component.sprintLength).toBe(2);
    expect(component.spareTime.value).toBe(0);
    expect(component.holidays.value).toBe(0);
    expect(component.members.size).toBe(0);
  });

  it('should subtract holidays when holidays is > 0', () => {
    component.form.controls.holidays.setValue(2);
    component.addMember(6);

    expect(component.workingDaysInSprint).toBe(8);
    expect(component.teamAvailability).toBe(6);
    expect(component.ratio).toBe(component.teamAvailability / component.workingDaysInSprint);
  });
});
