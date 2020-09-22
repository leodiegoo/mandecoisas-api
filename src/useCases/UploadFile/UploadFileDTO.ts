export interface IUploadFileRequestDTO {
  type_id: string;
  files: IFileRequestDTO[];
}

export interface IFileRequestDTO {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  path: string;
  filename: string;
  size: number;
}

export interface IUploadFileResponseDTO {
  type_id: string;
  id: string | number;
  size: number;
  total_files: number;
  expires_in: Date;
}
