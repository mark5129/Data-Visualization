const donut_i ={
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
            "name" : "Min Number of Flights: "
            }
            }
    ],
    "transform": [
        {
        "aggregate": [{"op": "sum", "field": "All_Flights", "as": "FlightCount"}],
        "groupby": ["International_City"]
        },
        {
        "filter": "datum.FlightCount > Min_Flights"
        },
        {
            "calculate": "datum.FlightCount + '  ' + datum.International_City",
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
            "title": "International Flights + City",
            "sort": {"field": "FlightCount", "order": "descending"}
        },
        "tooltip": [
            {"field": "Airline", "type": "nominal", "title": "Airline"},
            {"field": "FlightCount", "type": "quantitative", "title": "Count"}
        ]
    }
}

    // Embed the chart into the specified container
    //vegaEmbed('#donut_I', donut_i);