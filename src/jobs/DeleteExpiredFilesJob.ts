import { CronJob } from 'cron';
import { DeleteExpiredFilesUseCase } from '../useCases/DeleteExpiredFiles/DeleteExpiredFilesUseCase';

class DeleteExpiredFilesJob {
  public async execute(): Promise<void> {
    new CronJob(
      '0 */1 * * * *',
      this.job,
      null,
      true,
      'America/Sao_Paulo'
    ).start();
  }

  private async job() {
    const deleteExpiredFilesUseCase = new DeleteExpiredFilesUseCase();
    deleteExpiredFilesUseCase.execute();
  }
}

export default new DeleteExpiredFilesJob();
