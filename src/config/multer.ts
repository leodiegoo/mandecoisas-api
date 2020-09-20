import MulterGoogleCloudStorage from 'multer-google-storage';
import credentials from './firebase.credentials.json';

export default {
  storage: new MulterGoogleCloudStorage({
    projectId: credentials.projectId,
    bucket: credentials.storageBucket,
    keyFilename: './src/config/mandecoisas-firebase-adminsdk-3l5j3-7a1f6db32d.json'
  }),
  limits: {
    fileSize: 50 * 1024 * 1024
  }
};
