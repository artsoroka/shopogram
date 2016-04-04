# Shopogram app 

## Requirements 

* node.js 
* elasticsearch 

## Installation 

Clone repostory and install dependencies 
```
$ git clone https://github.com/artsoroka/shopogram
$ cd shopogram 
$ npm intall 
```

Update ```config/index.js``` or set your environment variables with ```.env``` file 
* SHOPOGRAM_PORT=8080
* SHOPOGRAM_ES_HOST=your_elasticseach_host
* SHOPOGRAM_ES_PORT=9200

## Fire up your server 
Your need Elasticsearch instance running so application could talk to it

Fresh installation of Elasticsearch requires indexes to be configured first. Check out the ```deployment/create_index.sh``` file, set ```ES_IP``` to point to your Elasticsearch instance, for example, if you're running it locally 

```
$ export ES_IP=localhost
$ bash deployment/create_index.sh 
```

Run ```$ npm start ``` 

### Lifting up with Docker 

Repository contains a ```Dockerfile``` so you can build an image and start a container. Also there is a ```docker-compose.yml``` to get up and running quickly 

```
$ docker-compose up -d 
$ bash deployment/create_index.sh
```
