import AppError from '../../errors/AppError';
import { firestore, storage } from '../../config/firebase';
import { IGetTransferRequestDTO, IGetTransferResponseDTO } from './GetTransferDTO';
import { File } from '../../entities/File';

export class GetTransferUseCase {
  public async execute(dto: IGetTransferRequestDTO): Promise<IGetTransferResponseDTO> {
    const transfer_ref = await firestore.collection('transfers').doc(dto.transfer).get();
    const transfer_data = transfer_ref.data();

    if (!transfer_data) {
      throw new AppError('Não encontrado', 404);
    }

    const files_ref = await firestore.collection('files').where('id_transfer', '==', dto.transfer).get();

    if (!files_ref.docs) {
      throw new AppError('Não encontrado', 404);
    }

    // const bucket = storage.bucket();
    const files = files_ref.docs.map((file) => {
      const file_ref = file.data() as File;
      return {
        file_id: file.id,
        file_path: file_ref.path
      };
    });

    return { transfer_id: dto.transfer, files };
    // files.forEach((file) => {
    //   const file_ref = file.data() as File;
    //   const file_storage_ref = bucket.file(file_ref.path);
    //   console.log(file_storage_ref);
    // });

    // return { files };
  }
}
