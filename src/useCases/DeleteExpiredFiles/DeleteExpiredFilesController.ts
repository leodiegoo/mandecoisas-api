import { Request, Response } from 'express';
import { DeleteExpiredFilesUseCase } from './DeleteExpiredFilesUseCase';

export class DeleteExpiredFilesController {
  constructor(private deleteExpiredFilesUseCase: DeleteExpiredFilesUseCase) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const result = await this.deleteExpiredFilesUseCase.execute();
    return response.json(result);
  }
}
