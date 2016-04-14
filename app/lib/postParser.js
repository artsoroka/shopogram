var HASHTAG = /^#(\w|\W)+/;
var MENTION = /^@(\w|\W)+/; 

module.exports = function(str){
    var text = str || '';
    var words = text.split(' ').filter(function(word){ 
        return word.length; 
    }); 
    
    var tags = words.filter(function(word){ 
        return HASHTAG.test(word); 
    }); 
    
    var mentions = words.filter(function(word){
        return MENTION.test(word); 
    }); 
    
    return {
        text    : text, 
        tags    : tags, 
        mentions: mentions 
    }; 
    
}; 