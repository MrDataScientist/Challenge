const express = require('express')
const DICOMwebClient = require('dicomweb-client')
const oc = require('orthanc-client');

const app = express()
const port = 3000

app.get("/", function(request, response) {
  response.end("Welcome to the homepage!");
});

const client = new oc({
  url: 'http://localhost:8042',
  auth: {
    username: 'foo',
    password: 'bar'
  }
});

// console.log('client:', client)

client.instances.getAll()
  .then(function(res) {
      console.log('RES:', res);
  })
  .catch(function(err) {
      console.log('err:', err);
  });




app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
