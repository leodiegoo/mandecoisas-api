import { DeleteExpiredFilesController } from './DeleteExpiredFilesController';
import { DeleteExpiredFilesUseCase } from './DeleteExpiredFilesUseCase';

const deleteExpiredFilesUseCase = new DeleteExpiredFilesUseCase();

const deleteExpiredFilesController = new DeleteExpiredFilesController(
  deleteExpiredFilesUseCase
);

export { deleteExpiredFilesUseCase, deleteExpiredFilesController };
