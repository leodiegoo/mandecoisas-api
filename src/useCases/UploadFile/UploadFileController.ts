import { Request, Response } from 'express';
import { IFileRequestDTO } from './UploadFileDTO';

import { UploadFileUseCase } from './UploadFileUseCase';

export class UploadFileController {
  constructor(private uploadFileUseCase: UploadFileUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { files } = request;
    const { type_id } = request.body;
    const result = await this.uploadFileUseCase.execute({
      type_id,
      files: files as IFileRequestDTO[]
    });
    return response.status(200).send(files);
  }
}
