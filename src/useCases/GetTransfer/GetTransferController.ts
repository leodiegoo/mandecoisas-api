import { Request, Response } from 'express';
import { GetTransferUseCase } from './GetTransferUseCase';

export class GetTransferController {
  constructor(private getTransferUseCase: GetTransferUseCase) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const { transfer } = request.params;
    const result = await this.getTransferUseCase.execute({ transfer });
    return response.json(result);
  }
}
