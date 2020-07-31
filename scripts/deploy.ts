import { exec } from 'child_process';

exec('git rev-parse --abbrev-ref HEAD', (getError, data) => {
  if (getError) {
    console.log(getError.message);
  } else {
    const branchName = data.trim();
    const domain = `https://${branchName}-cv.surge.sh`;
    exec(`surge build --domain ${domain}`, (surgeError) => {
      if (surgeError) {
        console.log(surgeError.message);
      } else {
        console.log(`Deployed to ${domain}`);
      }
    });
  }
});
