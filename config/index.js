module.exports = {
    APP: {
        port: process.env.SHOPOGRAM_PORT || 8080
    },  
    Elasticsearch: {
        host  : process.env.SHOPOGRAM_ES_HOST || 'localhost', 
        port  : process.env.SHOPOGRAM_ES_PORT || 9200, 
        /*
            Available debug options: 
            error, warning, info, debug and trace
        */
        logLevel : process.env.SHOPOGRAM_ES_LOGLEVEL || 'error'
    }
}; 