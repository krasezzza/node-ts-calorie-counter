import { IPatient } from "../interfaces";

export class PatientFactory {
  static create(requestBody: IPatient): IPatient {
    const patient: IPatient = {
      firstName: requestBody.firstName,
      lastName: requestBody.lastName,
    };

    return patient;
  }
}
