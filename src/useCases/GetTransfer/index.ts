import { GetTransferController } from './GetTransferController';
import { GetTransferUseCase } from './GetTransferUseCase';

const getTransferUseCase = new GetTransferUseCase();

const getTransferController = new GetTransferController(getTransferUseCase);

export { getTransferUseCase, getTransferController };
