'use strict'

const cheerio= require('cheerio');
const puppeteer= require('puppeteer');


async function scrap(jobUrl) {
  console.log(jobUrl+' si esta llegando a la funcion');
  
  //const products= urls.map((url)=>{


        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(jobUrl);
        const bodyHTML = await page.content();
        await page.close();
        await browser.close();
        const selector = cheerio.load(bodyHTML);
        //
        const body = selector("body");
        const title = body.find("#productTitle").text().replace(/\n/g,"");
        const price = body.find("#priceblock_ourprice").text().replace(/\n/g,"");
        const priceAlt = body.find("#price_inside_buybox").text().replace(/\n/g,"");
        const priceAlt2 = body.find("span .a-color-price").text().replace(/\n/g,"");
        const seller = body.find("#sellerProfileTriggerId").html();
        const image = body.find("#landingImage").attr("src");
        const features = body.find("#feature-bullets").text().replace(/\n/g,"");
        const url = jobUrl;
        //
        const product = {
          title: title,
          price: price,
          priceAlt: priceAlt,
          priceAlt2: priceAlt2,
          seller: seller,
          image: image,
          features: features,
          url: url
        };
        return product;

  //});
  //return products;

}
  
module.exports.scrap = scrap;