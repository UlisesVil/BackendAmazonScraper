'use strict'


var app = require('./app');
const port = process.env.PORT || 3000;



app.listen(port, () => {
  console.log('Scraping app listening at http://localhost:'+port);
});









/*
const targetPrice= 450;

let scraper = async url=>{
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.goto(url,{waitUntil: 'domcontentloaded'});
    await page.waitForSelector('#productTitle')
    await page.waitForTimeout(1000);
    const elements = await page.$$('#productTitle');
    const result = await page.evaluate(()=>{
        let title= document.getElementById('productTitle').innerHTML;
        return title;
    }
    );
    browser.close();
    return result;
};


function sendEmail(result){
    console.log('Con esta funcion se manda el mail');
};

function init(){
    scraper(url)
        .then(result => {
            /*let currentPrice = result.priceInt;
            if(currentPrice < targetPrice){
                sendEmail(result);
            }*/


            /*
            console.log(result);
        })
        .catch(err=>{
            console.log('Fatal Error', err);
        });
};

// cron.schedule('1 * * * *', ()=>{
//     console.log('Looking for a new price');
//     init();
// });

init();
*/