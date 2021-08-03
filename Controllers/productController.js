'use strict'

const scraperAmazon = require("../scraper");
var path= require('path');

var controller={

    getProducts: async (req, res) => {
        console.log(req.body+'la url si se visualiza');
        let url= req.body.url;
        //console.log(urls[0]);
      const product = await scraperAmazon.scrap(url);
      res.send(product);
    }


};

module.exports= controller;