export class CalculationResult {
  teamAvailability: number;
  workingDaysInSprint: number;
  ratio: number;

  constructor(teamAvailability: number, workingDaysInSprint: number, ratio: number) {
    this.teamAvailability = teamAvailability;
    this.workingDaysInSprint = workingDaysInSprint;
    this.ratio = ratio;
  }
}
