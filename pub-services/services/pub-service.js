var moment = require('moment');
var json = require('../mocks/pubs.json');

function getPubs (){
    var result = []
    for(var i= 0; i< json.length; ++i){
        result[i] = json[i].name
    }
    console.log(result);
    return result
}

function getOpenBar(){
    var result = []
    for(var i= 0; i< json.length; ++i){
        for (var j = 0; j<json[i].openDays.length; ++j){
            if(json[i].openDays[j] === moment().format('dddd')){
                result[i] = json[i];
            }
        }
    }
    console.log(result);
    return result;
}

module.exports = {
    getPubs: getPubs,
    getOpenBar: getOpenBar

}
