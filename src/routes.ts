import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import { uploadFileController } from './useCases/UploadFile';
import { getTransferController } from './useCases/GetTransfer';
import { downloadFileController } from './useCases/DownloadFile';
import { deleteExpiredFilesController } from './useCases/DeleteExpiredFiles';

const router = Router();
const upload = multer(multerConfig);

router.get('/', (request, response) => {
  return response.json({ message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄' });
});

router.get('/delete', (request, response) => {
  return deleteExpiredFilesController.handle(request, response);
});

router.get('/:transfer(\\w{6,6}$)', (request, response) => {
  return getTransferController.handle(request, response);
});

router.get('/:file_id(\\w{12,12}$)', (request, response) => {
  return downloadFileController.handle(request, response);
});

router.post('/file', upload.array('files'), (request, response) => {
  return uploadFileController.handle(request, response);
});

export { router };
