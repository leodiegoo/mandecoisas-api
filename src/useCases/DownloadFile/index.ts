import { DownloadFileController } from './DownloadFileController';
import { DownloadFileUseCase } from './DownloadFileUseCase';

const downloadFileUseCase = new DownloadFileUseCase();

const downloadFileController = new DownloadFileController(downloadFileUseCase);

export { downloadFileUseCase, downloadFileController };
