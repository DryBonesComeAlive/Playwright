const playwright = require('playwright');

(async () => {

    // Code execution starts here.
    const browser = await playwright["chromium"].launch({
        headless: false,
        slowMo: 1000
    });

    //context
    const context = await browser.newContext();

    //page
    const page = await context.newPage();

await page.goto('http://uitestingplayground.com/progressbar');

await page.click('#startButton');

await page.waitForSelector('[aria-valuenow="75"]')

await page.click('#stopButton');

await page.waitForTimeout(2500)



await browser.close();
})();
