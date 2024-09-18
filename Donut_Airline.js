const donut_a ={
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "width" : 400 ,
    "height" : 400 ,
    "description": "A simple donut chart with embedded data.",
    "data": {
      "url" : "https://raw.githubusercontent.com/mark5129/Data-Visualization/main/Flight_Data_2019.csv"
    },
    "params" : [
        {
            "name" : "Min_Flights",
            "value" : 0 ,
            "bind" : {
            "input" : "range",
            "min" : 0 ,
            "max" : 17000 ,
            "step" : 500 ,
            "name" : "Min Number of Flights: "
            }
            }
    ],
    "transform": [
        {
        "aggregate": [{"op": "sum", "field": "All_Flights", "as": "FlightCount"}],
        "groupby": ["Airline"]
        },
        {
        "filter": "datum.FlightCount > Min_Flights"
        },
        {
            "calculate": "datum.FlightCount + '  ' + datum.Airline",
            "as": "AirlineWithCount"
          },
    ],
    "selection" : {
        "Airline_highlight" : {
            "type" : "multi",
            "fields" : [ "AirlineWithCount" ],
            "bind" : "legend"}
        },
    "mark": {"type": "arc", "innerRadius": 100},
    "encoding": {
        "theta": {"field": "FlightCount", 
            "type": "quantitative"
        },
        "color": {"field": "AirlineWithCount", 
            "type": "nominal",
            "title": "International Flights + Airline",
            "sort": {"field": "FlightCount", "order": "descending"}
        },
        "opacity" : {
            "condition" : { 
                "selection" : "Airline_highlight","value" : 1 
            },
                "value" : 0.2
        },
        "tooltip": [
            {"field": "Airline", "type": "nominal", "title": "Airline"},
            {"field": "FlightCount", "type": "quantitative", "title": "Count"}
        ]
    }
}

    // Embed the chart into the specified container
    //vegaEmbed('#donut_A', donut_a);