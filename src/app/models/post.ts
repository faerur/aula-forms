import { DateTime } from "luxon";

export class Post {
  constructor(
    public id: string,
    public autor: string,
    public title: string,
    public data: DateTime,
    public content: string,
  ) {

  }
}
