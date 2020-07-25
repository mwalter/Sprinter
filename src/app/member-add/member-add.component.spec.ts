import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MemberAddComponent} from './member-add.component';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';

describe('MemberAddComponent', () => {
  let component: MemberAddComponent;
  let fixture: ComponentFixture<MemberAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MemberAddComponent, FaIconComponent]
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
    component.form.controls.availability.setValue(17);

    component.addMember();
    expect(component.add.emit).not.toHaveBeenCalled();
  });

  it('should raise clear event when method clearSprint() is called', () => {
    spyOn(component.clear, 'emit');

    component.clearSprint();
    expect(component.clear.emit).toHaveBeenCalled();
  });
});
