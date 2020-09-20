import AppError from '../../errors/AppError';
import { firestore, storage } from '../../config/firebase';
import { IDownloadFileRequestDTO, IDownloadFileResponseDTO } from './DownloadFileDTO';
import { File } from '../../entities/File';

export class DownloadFileUseCase {
  public async execute(dto: IDownloadFileRequestDTO): Promise<IDownloadFileResponseDTO> {
    const file_ref = await firestore.collection('files').doc(dto.file_id).get();
    const file_data = file_ref.data() as File;

    if (!file_data) {
      throw new AppError('Não encontrado', 404);
    }

    const bucket = storage.bucket();
    const bucket_file = bucket.file(file_data.file_name);

    return { bucket: bucket_file, file: file_data };
  }
}
