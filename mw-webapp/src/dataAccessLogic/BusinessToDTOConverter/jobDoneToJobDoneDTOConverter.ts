import {JobDone} from "src/model/businessModel/JobDone";
import {TimeUnit} from "src/model/businessModel/time/timeUnit/TimeUnit";
import {JobDoneDTO} from "src/model/DTOModel/JobDoneDTO";

/**
 * Convert {@link JobDone} to {@link JobDoneDTO}
 */
export const jobDoneToJobDoneDTOConverter = (jobDone: JobDone): JobDoneDTO => {
  return new JobDoneDTO({
    ...jobDone,
    timeUnit: TimeUnit[jobDone.timeUnit],
  });
};