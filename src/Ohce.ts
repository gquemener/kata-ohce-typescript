export type Printer = (input: string) => void;
export type Morning = "Morning";
export type Moment = () => Morning;

export class Ohce {
  constructor(printer: Printer, moment: Moment) {
  }

  public start(prenom: string) {
    return "¡Buenos días Pedro!";
  }
}
