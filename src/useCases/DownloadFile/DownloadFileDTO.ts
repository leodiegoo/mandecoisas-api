import { File as IFileResponse } from '@google-cloud/storage';
import File from '../../entities/File';

export interface IDownloadFileRequestDTO {
  file_id: string;
}

export interface IDownloadFileResponseDTO {
  file: File;
  bucket: IFileResponse;
}
