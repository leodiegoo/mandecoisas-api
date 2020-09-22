import File from '../../entities/File';
import Transfer from '../../entities/Transfer';

export interface IGetTransferRequestDTO {
  transfer: string;
}

export interface IGetTransferResponseDTO {
  transfer: Transfer;
  files: File[];
}
