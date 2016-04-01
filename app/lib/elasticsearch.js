var elasticsearch = require('elasticsearch');
var config        = require('../../config').Elasticsearch; 
var logLevel      = config.logLevel || 'trace'; 

module.exports = new elasticsearch.Client({
    host: [config.host, config.port].join(':'), 
    log: logLevel
}); 