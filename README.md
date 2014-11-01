![Gapminder Vizabi 0.4](http://static.gapminder.org/vizabi/vizabi.jpg)

####CSV-to-JSON Data converter for Vizabi
this script takes CSV and transforms it to Vizabi-readable JSON
For each country the mapping to country code and region code needs to be resolved.

####Environment
requires Node and csvtojson
install csvtojson: > npm install -g csvtojson
add csvtojson to the project > npm install csvtojson

####Input
*Country to regions mapping table  
Format example: [country name, country name alt2, country name alt N, region code]
*Country to country codes mapping table  
Format example: [country name, country name alt2, country name alt N, country code]
*Dataset to work with.  
Format example: [name,year,mean,variance,population]

####Use
launch using nodejs: > node read.js
the output is in *.json file

####;-)
Angie for Gapminder (2014)
