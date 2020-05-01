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

  it('should calculate availability when method addMember() is called', () => {
    component.addMember(8);

    expect(component.workingDaysInSprint).toBe(10);
    expect(component.teamAvailability).toBe(8);
    expect(component.diff).toBe(component.teamAvailability / component.workingDaysInSprint);
  });

});
