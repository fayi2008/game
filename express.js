let express = require('express');
let app=express();


let list=require('./controller');


for(let item in list){
  list[item](app)
}
app.use(express.static('./dist'));

let server =app.listen(8080, function () {
  let host = server.address().address;
  let port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
