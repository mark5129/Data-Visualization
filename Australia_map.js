const map_projection = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json", 
    "width": 800,
    "height": 450,
    //"title": "Number of flights going from Australian cities",
    "projection": {"type": "equalEarth"}, 
    "layer": [
        {
        "data": {
            "url": "https://raw.githubusercontent.com/mark5129/Data-Visualization/main/Australiamap.topojson",
            "format": {"type": "topojson", "feature": "ne_110m_admin_0_countries"}
        },
        "mark": {
            "type": "geoshape", 
            "fill": "lightgray", 
            "stroke": "white"
        }
        },
        {
            "data": {
                "url": "https://raw.githubusercontent.com/mark5129/Data-Visualization/main/Flight_Data_AUS_city.csv"
            },
            "transform" : [
            { "filter": "datum.All_Flights >= 500" }, // Filter out cities with less than 500 flights
            {
                // Calculate number of flights per 1000 population
                "calculate": "round((datum.All_Flights / (datum.AUS_Population / 1000)) * 100) / 100",
                "as": "Flights_per_1000_population"
            }
        ],
            "mark": {
                "type": "circle", 
                "tooltip": {
                    "content": "data"
                }
            }, 
            "encoding": {
                "longitude": {
                    "field": "Longitude", 
                    "type": "quantitative"
                },
                "latitude": {
                    "field": "Latitude", 
                    "type": "quantitative"
                },
                "size": {
                    "field": "Flights_per_1000_population",
                    "type": "quantitative",
                    "title" : "Flights pr. 1000 population",
                    "scale" : {
                        "type" : "linear",
                        "domain" : [ 0, 5, 10, 20 ],
                        "range" : [ 100 , 400 , 700 , 1000 , 1300]},
                },
                "tooltip": [
                    {"field": "Australian_City", "type": "nominal", "title": "Australian City"},
                    {"field": "AUS_State", "type": "nominal", "title": "Australian State"},
                    {"field": "AUS_Population", "type": "quantitative", "title": "Population", "format": ","},
                    {"field": "All_Flights", "type": "quantitative", "title": "Total Flights", "format": ","},
                    {"field": "Flights_per_1000_population", "type": "quantitative", "title": "Flights pr. 1000 pop.", "format": ","}
                ]
            }
        },
        {
            "data": {
                "url": "https://raw.githubusercontent.com/mark5129/Data-Visualization/main/Flight_Data_AUS_city.csv"
            },
            "transform" : [
            { "filter": "datum.All_Flights >= 500" } // Filter out cities with less than 500 flights
            ],
            "mark": {
                "type": "text",
                "dy": -15,  // Adjust the vertical offset of the text
                "fontSize": 10,
                "align": "center"
            },
            "encoding": {
                "longitude": {
                    "field": "Longitude", 
                    "type": "quantitative"
                },
                "latitude": {
                    "field": "Latitude", 
                    "type": "quantitative"
                },
                "text": {
                    "field": "Australian_City", 
                    "type": "nominal"
                },
            } 
        }
    ]
};

vegaEmbed('#map_projection', map_projection);