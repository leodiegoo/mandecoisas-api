export interface IGetTransferRequestDTO {
  transfer: string;
}

export interface IGetTransferResponseDTO {
  transfer_id: string;
  files: {
    file_id: string;
    file_path: string;
  }[];
}
