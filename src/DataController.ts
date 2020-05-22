/* eslint-disable @typescript-eslint/prefer-readonly */
type DataProperties =
| 'apiKey'
| 'language';

export default class DataController {
  private static instance: DataController;
  private apiKey: string;
  private language: string;

  private constructor() {}

  public static getInstance(): DataController {
    if (!DataController.instance)
      DataController.instance = new DataController();

    return DataController.instance;
  }

  public get(key: DataProperties): string {
    return this[key];
  }

  public set(key: DataProperties, value: string): void {
    this[key] = value;
  }
}
