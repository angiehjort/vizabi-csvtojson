![Gapminder Vizabi 0.4](http://static.gapminder.org/vizabi/vizabi.jpg)

####CSV-to-JSON Data converter for Vizabi
this script takes CSV and transforms it to Vizabi-readable JSON
For each country the mapping to country code and region code needs to be resolved.

####Environment
Requires [Node](http://nodejs.org/) and [csvtojson](https://www.npmjs.org/package/csvtojson)  
Add csvtojson to the project  
```sh 
npm install csvtojson
```

####Input
*Country to regions mapping table  
Format example: 
```sh 
[country name, country name alt2, country name alt N, region code]
```
*Country to country codes mapping table. Format example: 
```sh 
[country name, country name alt2, country name alt N, country code]
```
*Dataset to work with. Format example: 
```sh 
[name,year,mean,variance,population]
```

####Use
launch using nodejs:  
```sh 
node read.js
```
the output is in *.json file

####;-)
Angie for Gapminder (2014)
