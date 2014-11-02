![Gapminder Vizabi 0.4](http://static.gapminder.org/vizabi/vizabi.jpg)

####CSV-to-JSON data converter for Vizabi
This script takes CSV and transforms it to Vizabi-readable JSON.  
For each country the mapping to country code and region code needs to be resolved.

####Environment
Requires [Node](http://nodejs.org/) and [csvtojson](https://www.npmjs.org/package/csvtojson)  
Add csvtojson to the project  
```sh 
npm install csvtojson
```

####Input
* Country to regions mapping table. Any number of alternatives. Format example: 
```sh 
country name, country name alt2 ... country name alt N, region code
Afghanistan, Afgans land ... Beautiful country, asi
```
* Country to country codes mapping table. Any number of alternatives. Format example: 
```sh 
country name, country name alt2 ... country name alt N, country code
Afghanistan, Afgans land ... Beautiful country, afg
```
* Dataset to work with. Format example: 
```sh 
name,year,mean,variance,population
Afghanistan,1970,7.211355,0.4842485,12430.62
...
```

####Use
Launch using nodejs:  
```sh 
node read.js
```
The output is in *.json file. Output example:
```sh 
[
    [{
        "time": 1970,
        "pop": 12430.62,
        "mean": 7.211355,
        "variance": 0.4842485,
        "geo": "afg",
        "geo.name": "Afghanistan",
        "geo.category": ["country"],
        "geo.region": "asi"
    }, {
        "time": 1971,
        "pop": 12749.38,
        "mean": 7.224139,
        "variance": 0.4769112,
        "geo": "afg",
        "geo.name": "Afghanistan",
        "geo.category": ["country"],
        "geo.region": "asi"
    },
    
    ...
    
    ]
]
```

####;-)
Angie for Gapminder (2014)
