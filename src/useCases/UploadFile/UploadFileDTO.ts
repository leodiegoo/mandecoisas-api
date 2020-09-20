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
}

export interface IUploadFileResponseDTO {
  type_id: string;
  id: string | number;
}
