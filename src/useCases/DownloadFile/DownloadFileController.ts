import { Request, Response } from 'express';
import { DownloadFileUseCase } from './DownloadFileUseCase';

export class DownloadFileController {
  constructor(private downloadFileUseCase: DownloadFileUseCase) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const { file_id } = request.params;
    const { bucket, file } = await this.downloadFileUseCase.execute({ file_id });
    const fileStream = bucket.createReadStream();

    response.attachment(file.original_name);
    response.contentType(file.mimetype);
    fileStream.pipe(response);

    return response;
  }
}
