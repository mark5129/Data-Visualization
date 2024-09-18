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
            "max" : 440 ,
            "step" : 10 ,
            "name" : "Min Number of Routes: "
            }
            }
    ],
    "transform": [
        {
        "aggregate": [{"op": "count", "as": "FlightCount"}],
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
    "mark": {"type": "arc", "innerRadius": 100},
    "encoding": {
        "theta": {"field": "FlightCount", 
            "type": "quantitative"
        },
        "color": {"field": "AirlineWithCount", 
            "type": "nominal",
            "title": "Routes + Airline",
            "sort": {"field": "FlightCount", "order": "descending"}
        },
        "tooltip": [
            {"field": "Airline", "type": "nominal", "title": "Airline"},
            {"field": "FlightCount", "type": "quantitative", "title": "Count"}
        ]
    }
}

    // Embed the chart into the specified container
    //vegaEmbed('#donut_A', donut_a);