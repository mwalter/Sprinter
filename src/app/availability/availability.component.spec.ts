import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AvailabilityComponent} from './availability.component';

describe('AvailabilityComponent', () => {
  let component: AvailabilityComponent;
  let fixture: ComponentFixture<AvailabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AvailabilityComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailabilityComponent);
    component = fixture.componentInstance;
    component.members = createMembersMap();
    component.teamAvailability = 17;
    component.workingDaysInSprint = 20;
    component.ratio = component.teamAvailability / component.workingDaysInSprint;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show calculated availability', () => {
    const h3 = fixture.nativeElement.querySelector('h3');
    expect(h3.textContent).toContain('17');
    expect(h3.textContent).toContain('20');
    expect(h3.textContent).toContain('85.0%');
  });

  function createMembersMap() {
    const members = new Map<string, number>();
    members.set('123', 8);
    members.set('456', 9);
    return members;
  }

});
