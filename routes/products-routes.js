'use strict'

var express = require('express');
var ProductController= require('../Controllers/productController');

var router= express.Router();

router.post("/getproducts", ProductController.getProducts);

module.exports = router;

/*
app.get("/getproducts", async (req, res) => {
    //const url = 'https://www.amazon.com/-/es/Máscara-JURASSIC-WORLD-CHOMP-Velociraptor/dp/B076FTFYTL/?_encoding=UTF8&pd_rd_w=1INpp&pf_rd_p=e6466728-468b-41bb-b5c0-ae48471ad212&pf_rd_r=5VBZ26R95CFK003M340B&pd_rd_r=86985fbd-06cd-4d91-b005-31638082d793&pd_rd_wg=YmgcE&ref_=pd_gw_unk';
    //const url = "https://www.amazon.com/Fit-Over-Blue-Light-Glasses/dp/B08T14RV4M";
    const url = 'https://www.amazon.com.mx/Lekesky-extensible-pequeños-plegable-seguridad/dp/B08XY1SC8Q/ref=sr_1_5?__mk_es_MX=ÅMÅŽÕÑ&dchild=1&keywords=perros&qid=1627823096&sr=8-5';
    //const url = 'https://www.amazon.com.mx/Tablero-Videojuegos-Joystick-Jugadores-Divertido/dp/B07KKNRMNF?ref_=Oct_DLandingS_D_5f90baa1_60&smid=A23GI8CCKENGEP';
  const product = await scraperAmazon.scrap(url);
  res.send(product);
});
*/