const donut_i ={
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "width" : 400 ,
    "height" : 400 ,
    "title": "Top 10 destinations from Australia",
    "description": "A simple donut chart with embedded data.",
    "data": {
      "url" : "https://raw.githubusercontent.com/mark5129/Data-Visualization/main/Flight_Data_2019.csv"
    },
    /* "params" : [
        {
            "name" : "Min_Flights",
            "value" : 0 ,
            "bind" : {
            "input" : "range",
            "min" : 5500 ,
            "max" : 15000 ,
            "step" : 500 ,
            "name" : "Min Number of Flights: "
            }
            }
    ], */
    "transform": [
        {
        "aggregate": [{"op": "sum", "field": "All_Flights", "as": "FlightCount"}],
        "groupby": ["International_City"]
        },
        /* {
        "filter": "datum.FlightCount > Min_Flights"
        }, */
        {"filter": "datum.FlightCount > 5900"}, // Filter out cities with less than 5000 flights
        {
            "calculate": "datum.FlightCount + '  ' + datum.International_City",
            "as": "AirlineWithCount"
          },
          {
            "window": [{"op": "sum", "field": "FlightCount", "as": "TotalFlights"}],
            "frame": [null, null]
        },
        {
            "calculate": "round((datum.FlightCount / datum.TotalFlights) * 100 * 100) / 100",
            "as": "Percentage"
          },
    ],
    "selection" : {
        "City_highlight" : {
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
            "title": "International Flights + City",
            "sort": {"field": "FlightCount", "order": "descending"}
        },
        "opacity" : {
            "condition" : { 
                "selection" : "City_highlight","value" : 1 
            },
                "value" : 0.2
        },
        "tooltip": [
            {"field": "International_City", "type": "nominal", "title": "International City"},
            {"field": "FlightCount", "type": "quantitative", "title": "Count"},
            {"field": "Percentage", "type": "quantitative", "title": "Percentage"}
        ]
    }
}

    // Embed the chart into the specified container
    //vegaEmbed('#donut_I', donut_i);