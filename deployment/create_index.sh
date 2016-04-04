# Fresh installation of Elasticsearch should be configured first 

# If using Docker or docker-compose 
# these commands are used to get Elasticsearch container IP address
CONTAINER_NAME=elasticsearch
ES_IP=$(docker inspect --format '{{ .NetworkSettings.IPAddress }}' $CONTAINER_NAME)

# If index is already defined, it should be deleted first 
#   curl -XDELETE $ES_IP:9200/shopogram

curl -XPOST $ES_IP:9200/shopogram -d '{
    "settings" : {
        "number_of_shards" : 1,
        "number_of_replicas" : 1, 
        "analysis": {
			"analyzer": {
				"my_analyzer": {
					"type": "custom",
					"tokenizer": "standard",
					"filter": ["lowercase", "russian_morphology", "english_morphology"]
				}
			}
		}
    },
    "mappings" : {
        "posts" : {
            "properties" : {
                "text" : { "type" : "string", "analyzer" : "my_analyzer" }, 
                "colors": { "type": "string" }
            },
            "_source": {
                "excludes": [
                  "images.*"
                ]
            }
        }
    }
}'