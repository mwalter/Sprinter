import {TestBed} from '@angular/core/testing';
import {CalculationService} from './calculation.service';

describe('CalculationService', () => {
  let service: CalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate availability 18', () => {
    const members = new Map<string, number>();
    members.set('1', 9);
    members.set('2', 9);

    const result = service.calculate(members, 0, 2, 0);

    expect(result.workingDaysInSprint).toBe(20);
    expect(result.teamAvailability).toBe(18);
    expect(result.ratio).toBe(result.teamAvailability / result.workingDaysInSprint);
  });

  it('should calculate availability 16', () => {
    const members = new Map<string, number>();
    members.set('1', 8);
    members.set('2', 8);

    const result = service.calculate(members, 0, 2, 2);

    expect(result.workingDaysInSprint).toBe(16);
    expect(result.teamAvailability).toBe(16);
    expect(result.ratio).toBe(result.teamAvailability / result.workingDaysInSprint);
  });

  it('should calculate availability 14.4', () => {
    const members = new Map<string, number>();
    members.set('1', 8);
    members.set('2', 8);

    const result = service.calculate(members, 10, 2, 0);

    expect(result.workingDaysInSprint).toBe(20);
    expect(result.teamAvailability).toBe(14.4);
    expect(result.ratio).toBe(result.teamAvailability / result.workingDaysInSprint);
  });

  it('should calculate availability 14.4', () => {
    const members = new Map<string, number>();
    members.set('1', 8);
    members.set('2', 8);

    const result = service.calculate(members, 10, 2, 1);

    expect(result.workingDaysInSprint).toBe(18);
    expect(result.teamAvailability).toBe(14.4);
    expect(result.ratio).toBe(result.teamAvailability / result.workingDaysInSprint);
  });

  it('should calculate availability 33', () => {
    const members = new Map<string, number>();
    members.set('1', 15);
    members.set('2', 10);
    members.set('3', 8);

    const result = service.calculate(members, 0, 3, 0);

    expect(result.workingDaysInSprint).toBe(45);
    expect(result.teamAvailability).toBe(33);
    expect(result.ratio).toBe(result.teamAvailability / result.workingDaysInSprint);
  });

  it('should calculate availability 0', () => {
    const members = new Map<string, number>();

    const result = service.calculate(members, 0, 1, 0);

    expect(result.workingDaysInSprint).toBe(0);
    expect(result.teamAvailability).toBe(0);
    expect(result.ratio).toBeNaN();
  });

});
