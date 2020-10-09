import firebase from 'firebase-admin';

export default class File {
  public datetime: firebase.firestore.Timestamp;

  public expires_in: firebase.firestore.Timestamp;

  public expired?: boolean;

  public size: number;

  public total_files: number;

  public type_id: string;

  public id?: string;

  constructor(props: File) {
    Object.assign(this, props);
  }
}
