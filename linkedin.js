const puppeteer = require('puppeteer')
require('dotenv').config()


module.exports = function automate (message,url){

const linkedinUrl = url
const linkedinEmail = process.env.EMAIL;
const linkedinPassword = process.env.PASSWORD;

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });

   
    await page.goto('https://www.linkedin.com/login');
    await page.type('#username', linkedinEmail);
    await page.type('#password', linkedinPassword);
    await page.click('button[type="submit"]');
    await page.waitForNavigation();


    await page.goto(linkedinUrl);
    await page.waitForSelector('button[aria-label*="Invite"]', { timeout: 9000 }); 

 
    const connectAndSendMessage = async () => {
        const connectButtonSelector = 'button[aria-label*="Invite"]';
        const nextButtonSelector = 'button[aria-label="Next"]';

        while (true) {
            const connectButtons = await page.$$(connectButtonSelector);

            for (const button of connectButtons) {
                try {
                    await button.click();
                    console.log("Connection clicked");

                    await page.waitForSelector('button[aria-label="Add a note"]', { visible: true, timeout: 5000 });
                    console.log("Add a note button found");

    
                    await page.click('button[aria-label="Add a note"]');
                    console.log("Add a note button clicked");

                    
                    await page.waitForSelector('textarea[name="message"]', { visible: true, timeout: 5000 });
                    await page.type('textarea[name="message"]', message);
                    console.log("Message typed");


                    await page.click('button[aria-label="Send invitation"]');
                    console.log("Invite sent");

                    await new Promise(resolve => setTimeout(resolve, 2000)); 

                } catch (error) {
                    console.error('Error while connecting:', error);
                    await page.reload();
                    await new Promise(resolve => setTimeout(resolve, 3000)); 
                    break; 
                }
            }

          
            const nextButton = await page.$(nextButtonSelector);
            if (nextButton) {
                await nextButton.click();
                console.log("Next page button clicked");
                await new Promise(resolve => setTimeout(resolve, 5000)); 
                await page.waitForSelector(connectButtonSelector, { timeout: 60000 });
            } else {
                console.log('No more pages to navigate.');
                break;
            }
        }
    };

    await connectAndSendMessage();

    await browser.close();
})();


}

