var Converter=require("csvtojson").core.Converter;
var fs=require("fs");
var INIT = "init",
    DONE_READ_DATA = "done reading data",
    DONE_READ_COUNTRYMAPPING = "done country mapping",
    DONE_READ_REGIONMAPPING = "done region mapping",
    DONE_WRITE_RESULT = "done writing results";

var NOT_FOUND = "NOT FOUND";
var model = {};


// hey
// orchestrating function - defines the procedure
// --------------------------------
function hey(what, arg){
    console.log("HEY: " + what);
    switch(what){
    case INIT: 
            readCSV("dataset.csv", "data", DONE_READ_DATA); break;
    case DONE_READ_DATA: 
            readCSV("country_synonyms.csv", "countryMapping", DONE_READ_COUNTRYMAPPING); break;
    case DONE_READ_COUNTRYMAPPING: 
            readCSV("country_regions.csv", "regionMapping", DONE_READ_REGIONMAPPING); break;
    case DONE_READ_REGIONMAPPING: 
            writeResult("response_0-mountains.json", "result", DONE_WRITE_RESULT); break;
    case DONE_WRITE_RESULT: 
            console.log("Done"); break;
    }
}


// readCSV
// Reads CSV [filename] and writes it as JSON to model under [exportName]
// then transfers control to [next] when done
// --------------------------------
function readCSV(filename, exportName, next){
    var fileStream=fs.createReadStream("./" + filename);
    var csvConverter=new Converter({});
    csvConverter.on("end_parsed",function(jsonObj){
        model[exportName] = jsonObj;
        hey(next);
    });
    fileStream.pipe(csvConverter);
}


// writeResult
// reorganizes the data and writes it to [filename]
// then transfers control to [next] when done
// --------------------------------
function writeResult(filename, exportName, next){
    model[exportName] = model.data.map(function(d){
        return {
            "time": d.year,
            "pop": d.population,
            "mean": d.mean,
            "variance": d.variance,
            "geo": mapper(d.name, "ISO3dig_ext", "countryMapping").toLowerCase(),
            "geo.name": d.name,
            "geo.category": [
                "country"
            ],
            "geo.region": mapper(d.name, "gapminder region", "regionMapping").toLowerCase(),
        };
    });
    fs.writeFile(filename, JSON.stringify([model[exportName]]), function(err){
        hey(next);
    })
}


// mapper - helper function
// searches [from] in all properties of [mappingTable] object
// if found, returns the correspinding value of [targetProperty]
// if not, prints a warning ans saves NOT_FOUND
// --------------------------------
function mapper(from, targetProperty, mappingTable) {
    var to = NOT_FOUND;
    model[mappingTable].forEach(function(d){
        for(property in d){ if(d[property]==from) to=d[targetProperty]; }
    });
    if(to == NOT_FOUND) console.warn("WARNING: property not resolved for: " + from + " (" +targetProperty + ")");
    return to;
}


// ignition
hey(INIT);
