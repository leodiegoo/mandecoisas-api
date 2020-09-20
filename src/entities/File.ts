export class File {
  public field_name: string;

  public original_name: string;

  public encoding: string;

  public mimetype: string;

  public path: string;

  public file_name: string;

  public id_transfer: string;

  public id?: string;

  constructor(props: File) {
    Object.assign(this, props);
  }
}
