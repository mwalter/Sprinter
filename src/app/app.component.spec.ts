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

});
