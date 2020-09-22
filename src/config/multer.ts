import MulterGoogleCloudStorage from 'multer-cloud-storage';
import { v4 as uuid } from 'uuid';
import credentials from './firebase.credentials.json';

export default {
  storage: new MulterGoogleCloudStorage({
    projectId: credentials.projectId,
    bucket: credentials.storageBucket,
    keyFilename: './src/config/mandecoisas-firebase-adminsdk-3l5j3-7a1f6db32d.json',
    filename(req: any, file: any, cb: any) {
      cb(null, `${uuid()}_${file.originalname}`);
    }
  }),
  limits: {
    fileSize: 50 * 1024 * 1024
  }
};
