import { zonedTimeToUtc } from 'date-fns-tz';
import { isAfter } from 'date-fns';
import { firestore, storage } from '../../config/firebase';
import Transfer from '../../entities/Transfer';
import File from '../../entities/File';

export class DeleteExpiredFilesUseCase {
  public async execute(): Promise<void> {
    const agora = zonedTimeToUtc(new Date(), '-3');
    const transfer_ref = await firestore
      .collection('transfers')
      .where('expired', '==', false)
      .get();

    const bucket = storage.bucket();

    transfer_ref.docs.forEach(async (doc_transfer) => {
      const transfer = {
        ...doc_transfer.data(),
        id: doc_transfer.id
      } as Transfer;
      const { expires_in, id: transfer_id } = transfer;

      if (isAfter(agora, expires_in.toDate())) {
        const files_ref = await firestore
          .collection('files')
          .where('id_transfer', '==', transfer_id)
          .get();

        files_ref.docs.forEach((doc_file) => {
          const file = {
            ...doc_file.data(),
            id: doc_file.id
          } as File;

          const bucket_file = bucket.file(file.file_name);
          bucket_file.delete();
          doc_file.ref.update({ expired: true });
        });

        doc_transfer.ref.update({ expired: true });
      }
    });
  }
}
