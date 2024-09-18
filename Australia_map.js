const map_projection = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json", 
    "width": 800,
    "height": 450,
    "title": "Number of flights going to Australian cities",
    "projection": {"type": "equalEarth"}, 
    "layer": [
        {
        "data": {
            "url": "https://raw.githubusercontent.com/mark5129/Data-Visualization/main/ne_110m_admin_0_countries.topojson",
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
                } 
            }
        } 
    ]
};

vegaEmbed('#map_projection', map_projection);