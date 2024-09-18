const chart1Spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "width" : 500 ,
    "height" : 300 ,
    "description": "A simple horizontal bar chart with embedded data.",
    "data": {
        "url" : "https://raw.githubusercontent.com/mark5129/Data-Visualization/main/Flight_Data_AUS_city.csv"
    },
    "params" : [
        {
            "name" : "Flights_selection",
            "value" : 100000 ,
            "bind" : {
            "input" : "range",
            "min" : 3000 ,
            "max" : 83000 ,
            "step" : 10000 ,
            "name" : "Max Number of flights: "
            }
            }
    ],
    "transform" : [
        { "filter" : "datum.All_Flights < Flights_selection" },
        ],
    "mark": "bar",
    "encoding": {
        "y": {
            "field": "Australian_City", 
            "type": "nominal", 
            "axis": {"labelAngle": 0},
            "title" : "Australian City"
            },
        "x": {
            "field": "All_Flights", 
            "type": "quantitative",
            "title" : "Number of International Flights pr. City",
            "axis" : { "tickCount" : 5 }
            },
        "color" : {
            "field" : "Australian_City",
            "type" : "nominal",
            "legend" : null,
            "scale" : {
                "domain" : [
                    "Adelaide", 
                    "Brisbane", 
                    "Cairns", 
                    "Canberra", 
                    "Darwin", 
                    "Gold Coast", 
                    "Melbourne", 
                    "Newcastle", 
                    "Perth", 
                    "Port Hedland", 
                    "Sydney", 
                    "Sunshine Coast", 
                    "Norfolk Island"],
                "range" : [
                    "#a6cee3", 
                    "#1f78b4", 
                    "#b2df8a", 
                    "#33a02c", 
                    "#fb9a99", 
                    "#e31a1c", 
                    "#fdbf6f", 
                    "#ff7f00", 
                    "#cab2d6", 
                    "#6a3d9a", 
                    "#ffff99", 
                    "#b15928", 
                    "#8dd3c7"]
            }
        },
        "tooltip" : [
            { "field" : "All_Flights","type" : "quantitative","format" : "," },
            { "field" : "AUS_State","type" : "nominal"}
            ]
        },
};

// Embed the chart into the specified container
vegaEmbed('#barchart', chart1Spec);

