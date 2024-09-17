const flightDataUrl = "https://raw.githubusercontent.com/mark5129/Data-Visualization/main/Flight_Data.csv";

const barchart2 = {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "data": {
          "url": flightDataUrl,
          "format": {"type": "csv"}
        },
        "mark": "bar",
        "encoding": {
          "x": {"field": "Australian_City", "type": "nominal", "axis": {"labelAngle": 0}, "title": "Australian City"},
          "y": {"aggregate": "count", "type": "quantitative", "title": "Number of Flights"},
          "color": {"field": "Australian_City", "type": "nominal"}
        },
        "transform": [
          {
            "filter": "datum.Year == 2003" 
          }
        ],
        "title": "Flight Distribution by Australian City",
        "width": 800,
        "height": 400
      };

    vegaEmbed("#barchart2_with_slider", barchart2);