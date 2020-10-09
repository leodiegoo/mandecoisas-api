import { id } from 'rangen';
import { addMinutes } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';
import { firestore } from '../../config/firebase';
import { IUploadFileRequestDTO, IUploadFileResponseDTO } from './UploadFileDTO';
import credentials from '../../config/firebase.credentials.json';

export class UploadFileUseCase {
  async execute(
    uploadDTO: IUploadFileRequestDTO
  ): Promise<IUploadFileResponseDTO> {
    const datetime = zonedTimeToUtc(new Date(), '-3');
    const expires_in = addMinutes(datetime, 10);
    const id_transfer = id({
      length: 6,
      charSet: uploadDTO.type_id === 'string' ? 'alpha' : 'num'
    });

    const total_files = uploadDTO.files.length;
    const size = uploadDTO.files.reduce((total, file) => total + file.size, 0);

    await firestore.collection('/transfers').doc(id_transfer).create({
      type_id: uploadDTO.type_id,
      datetime,
      expires_in,
      total_files,
      size,
      expired: false
    });

    uploadDTO.files.forEach((file) => {
      firestore
        .collection('/files')
        .doc(id({ length: 12, charSet: 'alphanum' }))
        .create({
          field_name: file.fieldname,
          original_name: file.originalname,
          encoding: file.encoding,
          mimetype: file.mimetype,
          path: `https://${credentials.storageBucket}/${file.path}`,
          file_name: file.filename,
          id_transfer,
          size: file.size,
          expired: false
        });
    });

    return {
      id: id_transfer,
      type_id: uploadDTO.type_id,
      total_files,
      size,
      expires_in
    };
  }
}
