const express = require('express');
app = express();
bodyParser = require('body-parser');
cors = require('cors');
axios = require('axios');
port = 3000;
baseURL = `/api/makeup`;
let makeupObj = [];


app.use(bodyParser.json());
app.use(cors());

app.get(baseURL, (req, res) => {
      if (makeupObj.length === 0) {


            axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json`)

                  .then(response => {
                        makeupObj = response.data;
                        res.status(200).send(makeupObj);
                  })
      }else{
            res.status(200).send(makeupObj);
      }
})

// app.get(`${baseURL}/?brand`,(req,res)=>{
//       let brand=makeupObj.filter((item)=>{
//             item.brand===req.query.brand
//       })
//       res.status(200).send(brand);
// })

// app.get(`${baseURL}/?product_type`,(req,res)=>{
//       let product_type=makeupObj.filter((item)=>{
//             item.product_type===req.query.product_type
//       })
//       res.status(200).send(product_type);
// })





app.listen(port, () => console.log(`listening on port: ${port}`))