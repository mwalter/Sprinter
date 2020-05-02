import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MemberListComponent} from './member-list.component';

describe('MemberListComponent', () => {
  let component: MemberListComponent;
  let fixture: ComponentFixture<MemberListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MemberListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberListComponent);
    component = fixture.componentInstance;
    component.members = createMembersMap();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should raise remove event when method removeMember() is called', () => {
    spyOn(component.remove, 'emit');

    component.removeMember('123');
    expect(component.remove.emit).toHaveBeenCalled();
  });

  it('should return index of map entries', () => {
    expect(component.getIndex('123')).toBe(0);
    expect(component.getIndex('456')).toBe(1);
  });

  function createMembersMap() {
    const members = new Map<string, number>();
    members.set('123', 8);
    members.set('456', 9);
    return members;
  }

});
