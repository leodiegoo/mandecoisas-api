export default class File {
  public datetime: Date;

  public expires_in: Date;

  public size: number;

  public total_files: number;

  public type_id: string;

  public id?: string;

  constructor(props: File) {
    Object.assign(this, props);
  }
}
