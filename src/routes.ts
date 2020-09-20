import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';
import { uploadFileController } from './useCases/UploadFile';

const router = Router();
const upload = multer(multerConfig);

router.get('/', (request, response) => {
  return response.json({ message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄' });
});

router.post('/file', upload.array('files'), (request, response) => {
  return uploadFileController.handle(request, response);
});

export { router };
