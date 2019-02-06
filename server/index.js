const express = require('express');
app = express();
bodyParser = require('body-parser');
cors = require('cors');
axios = require('axios');
port = 3535;
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
      } else {
            res.status(200).send(makeupObj);
      }
})


app.listen(port, () => console.log(`listening on port: ${port}`))