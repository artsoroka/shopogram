var HASHTAG = /^#(\w|\W)+/;
var MENTION = /^@(\w|\W)+/; 

module.exports = function(str){
    var text  = str || '';
    var words = text.split(' ').filter(function(word){ 
        return word.length; 
    }); 
    
    var post = words.reduce(function(acc, word){
        var wordWithoutSymbol = word.slice(1, word.length); 
        
        if( HASHTAG.test(word) ){
            acc.tags.push(wordWithoutSymbol); 
        }
        
        if( MENTION.test(word) ){
            acc.mentions.push(wordWithoutSymbol); 
        }
        
        return acc; 
        
    }, {
        tags: [], 
        mentions: []
    }); 
    
    post.text = text; 
    
    return post; 
    
}; 