var pubService = require('./pub-services/pub-service');
//var json = require('./mocks/pubs.json')

module.exports = {
    services:{
        pubService: pubService
    }
}

//console.log(service.getPubs(json));
//console.log(service.getOpenBar(json));