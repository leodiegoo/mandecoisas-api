import AppError from '../../errors/AppError';
import { firestore } from '../../config/firebase';
import { IGetTransferRequestDTO, IGetTransferResponseDTO } from './GetTransferDTO';
import File from '../../entities/File';
import Transfer from '../../entities/Transfer';

export class GetTransferUseCase {
  public async execute(dto: IGetTransferRequestDTO): Promise<IGetTransferResponseDTO> {
    const transfer_ref = await firestore.collection('transfers').doc(dto.transfer).get();
    const transfer_data = transfer_ref.data() as Transfer;
    transfer_data.id = dto.transfer;

    if (!transfer_data) {
      throw new AppError('Não encontrado', 404);
    }

    const files_ref = await firestore.collection('files').where('id_transfer', '==', dto.transfer).get();

    if (!files_ref.docs) {
      throw new AppError('Não encontrado', 404);
    }

    const files = files_ref.docs.map((file) => {
      const file_ref = file.data() as File;
      const newFile: File = {
        ...file_ref,
        id: file.id
      };
      return newFile;
    });

    return { transfer: transfer_data, files };
  }
}
