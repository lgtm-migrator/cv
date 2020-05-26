import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox'],
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000', {
    waitUntil: 'networkidle2',
  });
  await page.pdf({ path: 'cv.pdf', format: 'A4' });

  await browser.close();
})();
