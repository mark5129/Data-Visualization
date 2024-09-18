const map_projection = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json", 
    "width": 800,
    "height": 450,
    "title": "Number of flights going from Australian cities",
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
                    "field": "All_Flights",
                    "type": "quantitative",
                    "scale" : {
                        "type" : "linear",
                        "domain" : [ 0, 20000, 40000, 60000, 80000 ],
                        "range" : [ 100 , 400 , 700 , 1000 , 1300]},
                },
                "tooltip": [
                    {"field": "Australian_City", "type": "nominal", "title": "Australian City"},
                    {"field": "AUS_State", "type": "nominal", "title": "Australian State"},
                    {"field": "AUS_Population", "type": "quantitative", "title": "Population", "format": ","},
                    {"field": "All_Flights", "type": "quantitative", "title": "Total Flights", "format": ","},
                    {"field": "Total_Seats", "type": "quantitative", "title": "Total Seats", "format": ","}
                ]
            }
        } 
    ]
};

vegaEmbed('#map_projection', map_projection);