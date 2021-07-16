import moment, { Moment } from "moment"




export default class AppDate {

  private date: Moment

  constructor(date: number | string | Date) {
    this.date = moment(date);
  }

  toFormattedDate() {
    return this.date.format('DD/MM/YYYY')
  }

  toWeekDay() {
    return this.date.format('ddd');
  }
}