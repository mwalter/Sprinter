import {Injectable} from '@angular/core';
import {CalculationResult} from '../model/CalculationResult';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  public calculate(members: Map<string, number>, spareTime: number, sprintLength: number, holidays: number): CalculationResult {
    let teamAvailability = 0.0;
    for (const availability of members.values()) {
      teamAvailability += availability;
    }

    if (spareTime > 0) {
      teamAvailability = teamAvailability * (1.0 - (spareTime / 100));
    }

    const workingDays = sprintLength * 5; // working 5 days a week
    const totalWorkingDays = (workingDays - holidays) * members.size;
    const ratio = teamAvailability / totalWorkingDays;

    return new CalculationResult(teamAvailability, totalWorkingDays, ratio);
  }

}
