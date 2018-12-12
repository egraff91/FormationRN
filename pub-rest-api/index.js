const express = require('express');
//const pubService = require('pub-services').services.pubService;
const pubService = require('../pub-services/index').services.pubService
const app = express();

app.get('/pubs', function(req, res){
   const pubs = pubService.getPubs()
    res.status(200).json(pubs);
})

var server = app.listen(3000, function(){
    console.log('Listening on port %d', server.address().port);
});

