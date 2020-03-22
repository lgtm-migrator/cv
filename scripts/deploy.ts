import { exec } from 'child_process';

exec('git rev-parse --abbrev-ref HEAD', (error, data) => {
  exec(`surge build --domain https://${data}-cv.surge.sh`);
});
