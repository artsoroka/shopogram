var express    = require('express'); 
var bodyParser = require('body-parser'); 
var app        = express(); 
var client     = require('./lib/elasticsearch'); 
var buildQuery = require('./lib/buildQuery'); 

app.use(express.static(__dirname + '/public')); 
app.use(bodyParser.json()); 

app.set('view engine', 'ejs'); 
app.set('views', __dirname + '/views'); 

app.get('/', function(req, res){
    res.render('mainpage'); 
}); 

app.post('/search', function(req,res){
    var body   = req.body    || {}; 
    var query  = body.query  || null; 
    var colors = body.colors || null; 
    
    client
        .search({
            index: 'test', 
            type : 'posts', 
            body : buildQuery({
            text  : query,
                colors: colors
            }) 
        })
        .then(function(response){
            if( ! response.hits.total ){
                console.log('Cound not find any records matching %s', query); 
                return []; 
            }
            return response.hits.hits;  
        })
        .then(function(data){
            var records = data.map(function(entry){
                return {
                    id: entry._id, 
                    data: entry._source
                }; 
            }); 
            res.json(records); 
        })
        .catch(function(err){
            res.status(500).json({
                error: err
            }); 
        }); 
    
}); 

module.exports = app; 