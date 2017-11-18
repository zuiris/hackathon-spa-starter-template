# #Hack4Climate - Innosoft. 
#### Green Sensing: Smart Sensing: Global Distributed GHG and Local Pollutant Sensing Networks for Climate Accountability
You need nodejs and docker installed on your machine in order to be able to work with a project

1. ```npm i```
2. ```webpack --config webpack.config.vendor.js```
3. ```npm start```
4. ```PROFIT!!!```

## Atmospheric model
Code and model approaches adapted from: (1) https://dspace.mit.edu/handle/1721.1/99790 (2) http://personalpages.manchester.ac.uk/staff/paul.connolly/teaching/practicals/gaussian_plume_modelling.html

#### Setup
* install Conda 3.5 
* install tqdm
    * with Conda: conda install tqdm
* install latex
    * inn ubuntu: sudo apt-get install texlive-full 

## API description

### Response structure

```
{
    “status”: string,
    “data”: object,
    “message”: string,
    “error”: object
}
```

* Status variants: fail, success
* Data - any object containing relevant information for request
* Message - any string to be shown in case of error
* Error - error object containing details regarding the error 

### Methods
#### GET /api/layers - get list of the available layers

##### Reponse
```
{
    “status”: “success”,
    “data”: {
    	"layers":[{
    		"title": "pollution",
    		"url": "/api/layers/pollution"
    	},{
    		"title": "stephen",
    		"url": "/api/layers/stephen"
    	}]
    }
}
```

#### GET /api/layers/{layer-name} - get data for specific layer
##### Reponse
```
{
    “status”: “success”,
    “data”: {
    	"points":[{
		...
    	},{
		...
    	}]
    }
}
```

#### GET /api/profile - get user data
##### Reponse
```
{
    “status”: “success”,
    “data”: {
    	"name":"string", //name of the person
    	"requests": 100, //number of requests she has to call the API,
    	"key": "some API key", //developer key to access the API
    }
}
```
#### POST /api/profile - set user data
##### Request
```
{
    	"name":"string", //name of the person
    	"requests": 100, //number of requests she has to call the API,
    	"key": "some API key", //developer key to access the API
}
```
##### Response:
```
Same as for GET
```

#### GET /api/buy - buy 100 requests
##### Reponse
```
{
    “status”: “success”,
    “data”: {
    	"wallet":"string", //the wallet address to deposit coins
    	"coins":100 //number of coins to be transfered
    }
}
```

#### GET /api/sensors - list your sensors
##### Reponse
```
{
    “status”: “success”,
    “data”: {
    	"sensors": [{
    	    "id":"string",//hardware id
    	    "lat":lat,
    	    "lng":lng,
    	    "type":"string",//type of the sensor
    	}]
    }
}
```

## Atmospheric model
Code and model approaches adapted from: (1) https://dspace.mit.edu/handle/1721.1/99790 (2) http://personalpages.manchester.ac.uk/staff/paul.connolly/teaching/practicals/gaussian_plume_modelling.html

#### Setup
* install Conda 3.5 
* install tqdm
    * with Conda: conda install tqdm
* install latex
    * inn ubuntu: sudo apt-get install texlive-full 

## Databases
We have 3 databases for backend part, that is
* MySQL (for front-end)
* MongoDB (for sensors)
* BigchainDB (add blockchain part to MongoDB)

In order to start all of them, just use docker compose:
in *./core*  execute `docker-compose up -d`
