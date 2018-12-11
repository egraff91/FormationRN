var moment = require('moment');

function getPubs (json){
    var result = []
    for(var i= 0; i< json.length; ++i){
        //console.log(json[i].name)
        result[i] = json[i].name
    }
    return result
}

function getOpenBar(json){
    var result = []
    for(var i= 0; i< json.length; ++i){
        for (var j = 0; j<json[i].openDays.length; ++j){
            if(json[i].openDays[j] === moment().format('dddd')){
                result[i] = json[i];
            }
        }
    }
    return result;
}


module.exports = {
    getPubs: getPubs,
    getOpenBar: getOpenBar

}
