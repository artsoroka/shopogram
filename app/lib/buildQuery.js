var _ = require('lodash'); 

var composeQuery = function(text){
    if( ! text ) return {
        matchAll: {}
    }; 
    
    return {
        match: {
            text: text
        }
    }; 
    
}; 

module.exports = function(data){
    var text   = data.text || null; 
    var colors = data.colors || null; 
    
    var query  = composeQuery(text); 
 
    if( _.isEmpty(colors) || ! _.isArray(colors) ){
        return {
            query: query
        };
    } 

    return {
        query : {
            filtered : { 
                query : query,
                filter : {
                    terms : { 
                        colors : colors
                    }
                }
            }
        }
    } 
    
}; 