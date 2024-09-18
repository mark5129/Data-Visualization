const spec = {
    "$schema" : "https://vega.github.io/schema/vega-lite/v5.json"
    ,
    "width" : 500 ,
    "height" : 400 ,
    "title" : "Flights Australia"
    ,
    "data" : {
    "url" : "https://github.com/mark5129/Data-Visualization/blob/main/Flight_Data_2019.csv"
    },
    "params" : [
        {
            "name" : "State_selection",
            "bind" : {
                "input" : "select",
                "options" : [
                    null ,
                    "North America",
                    "South America",
                    "Europe",
                    "Africa",
                    "Asia",
                    "Oceania"
                ],
                "labels" :[
                    "Show All",
                    "North America",
                    "South America",
                    "Europe",
                    "Africa",
                    "Asia",
                    "Oceania"
                    ],
                "name" : "Continent Selection: "
            }
        },
        {
            "name" : "Population_Above",
            "value" : 0 ,
            "bind" : {
            "input" : "range",
            "min" : 0 ,
            "max" : 100000000 ,
            "step" : 1000000 ,
            "name" : "Minimum Population: "
            }
            }
    ],
    "transform" : [
        { "filter" : "datum.Active > 0" },
        { "filter" : "datum.Deaths > 0" },
        {"filter" : "Continent_selection == null || datum.Continent == Continent_selection" },
        { "filter" : "datum.Population > Population_Above" },
        {
            "calculate" : "datum.Confirmed/datum.Population * 10000",
            "as" : "Cases per 10,000 Population"
            }
        ],
    "selection" : {
        "continent_highlight" : {
            "type" : "multi",
            "fields" : [ "Continent" ],
            "bind" : "legend"}
        },
    "mark" : "circle",
    "encoding" : {
        "x" : {
            "field" : "Confirmed",
            "type" : "quantitative","title" : "Confirmed Cases",
            "axis" : { "tickCount" : 7 },
            "scale" : { "type" : "log","domain" : [ 1 , 10000000 ]}
        },
        "y" : {
            "field" : "Deaths",
            "type" : "quantitative",
            "axis" : { "tickCount" : 6 },
            "scale" : { "type" : "log",
            "domain" : [ 1 , 1000000 ]
            }
        },
        "color" : {
            "field" : "Continent",
            "type" : "nominal",
            "scale" : {
                "domain" : [
                    "North America",
                    "South America",
                    "Europe",
                    "Africa",
                    "Asia",
                    "Oceania"],
                "range" : [
                    "#e41a1c",
                    "#984ea3",
                    "#ff7f00",
                    "#a6cee3",
                    "#377eb8",
                    "#a65628"]
            }
        },
        "opacity" : {
            "condition" : { 
                "selection" : "continent_highlight","value" : 0.6 },
                "value" : 0.2
        },
        "size" : {
            "field" : "Population",
            "type" : "quantitative",
            "scale" : {
                "type" : "threshold",
                "domain" : [ 1000000 , 10000000 , 50000000 , 100000000 , 500000000 ],
                "range" : [ 10 , 50 , 150 , 200 , 300 , 400 ]},
            "legend" : { "format" : ".1s" }
        },
        "tooltip" : [
            { "field" : "Country","type" : "nominal" },
            { "field" : "Confirmed","type" : "quantitative","format" : "," },
            { "field" : "Active","type" : "quantitative","format" : "," },
            { "field" : "Deaths","type" : "quantitative","format" : "," },
            { "field" : "Recovered","type" : "quantitative","format" : "," },
            {"field" : "Cases per 10,000 Population","type" : "quantitative","format" : ".2f"}
            ]
    }
};
    vegaEmbed('#Bubblevis', spec);

