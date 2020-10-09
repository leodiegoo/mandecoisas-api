import DeleteExpiredFilesJob from '../jobs/DeleteExpiredFilesJob';
import Logger from './logger';

export default async () => {
  await DeleteExpiredFilesJob.execute();
  Logger.info('✌️ Jobs loaded');
};
