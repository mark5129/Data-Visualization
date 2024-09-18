const spec2 = {
    "$schema" : "https://vega.github.io/schema/vega-lite/v5.json",
    "width" : 400 ,
    "height" : 300 ,
    //"title" : "Flights in Australia",
    "data" : {
    "url" : "https://raw.githubusercontent.com/mark5129/Data-Visualization/main/Flight_Data_AUS_city.csv"
    },
    "params" : [
        {
            "name" : "State_selection",
            "title" : "State Selection: ",
            "bind" : {
                "input" : "select",
                "options" : [
                    null ,
                    "South Australia (SA)", 
                    "Queensland (QLD)", 
                    "Australian Capital Territory (ACT)", 
                    "Northern Territory (NT)", 
                    "Victoria (VIC)", 
                    "New South Wales (NSW)", 
                    "Western Australia (WA)", 
                    "External Territory (ET)"
                ],
                "labels" :[
                    "Show All",
                    "South Australia (SA)", 
                    "Queensland (QLD)", 
                    "Australian Capital Territory (ACT)", 
                    "Northern Territory (NT)", 
                    "Victoria (VIC)", 
                    "New South Wales (NSW)", 
                    "Western Australia (WA)", 
                    "External Territory (ET)"
                    ],
            }
        },
    ],
    "transform" : [
        {"filter" : "State_selection == null || datum.AUS_State == State_selection" },
        ],
    "selection" : {
        "State_highlight" : {
            "type" : "multi",
            "fields" : [ "AUS_State" ],
            "bind" : "legend"}
        },
    "mark" : "circle",
    "encoding" : {
        "x" : {
            "field" : "AUS_Population",
            "type" : "quantitative",
            "title" : "Population",
            "axis" : { "tickCount" : 4 },
            "scale" : { "type" : "log" ,
                domain : [ 1000 , 10000000 ]
                }
            },
        "y" : {
            "field" : "All_Flights",
            "type" : "quantitative",
            "title" : "Total Flights",
            "axis" : { "tickCount" : 4 },
            "scale" : { "type" : "log" ,
                domain : [ 10 , 100000 ]
                }
            },
        "color" : {
            "field" : "AUS_State",
            "type" : "nominal",
            "scale" : {
                "domain" : [
                    "South Australia (SA)", 
                    "Queensland (QLD)", 
                    "Australian Capital Territory (ACT)", 
                    "Northern Territory (NT)", 
                    "Victoria (VIC)", 
                    "New South Wales (NSW)", 
                    "Western Australia (WA)", 
                    "External Territory (ET)"],
                "range" : [
                    "#a6cee3", 
                    "#1f78b4", 
                    "#b2df8a", 
                    "#33a02c", 
                    "#fb9a99", 
                    "#e31a1c", 
                    "#fdbf6f", 
                    "#ff7f00"  
                    ]
            }
        },
        "opacity" : {
            "condition" : { 
                "selection" : "State_highlight","value" : 0.6 
            },
                "value" : 0.2
        },
        "size" : {
            "field" : "State_airports",
            "type" : "quantitative",
            "title" : "Number of Airports pr. state",
            "scale" : {
                "type" : "threshold",
                "domain" : [ 1, 2, 3, 4 ],
                "range" : [ 10 , 50 , 150 , 200 ]},
            "legend" : { "format" : ".1s" }
        },
        "tooltip" : [
            { "field" : "Australian_City","type" : "nominal" },
            { "field" : "AUS_State", "type" : "nominal" },
            { "field" : "AUS_Population","type" : "quantitative","format" : "," },
            { "field" : "All_Flights","type" : "quantitative","format" : "," },
            { "field" : "Total_Seats","type" : "quantitative","format" : "," },
            {"field" : "State_airports","type" : "quantitative"}
            ]
    }
};

    vegaEmbed('#Bubblevis2', spec2);


