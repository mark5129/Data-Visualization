const chart1Spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "A simple bar chart with embedded data.",
    "data": {
        "values": [
            {"category": "A", "value": 28},
            {"category": "B", "value": 55},
            {"category": "C", "value": 43},
            {"category": "D", "value": 91},
            {"category": "E", "value": 81},
            {"category": "F", "value": 53},
            {"category": "G", "value": 19},
            {"category": "H", "value": 87}
        ]
    },
    "mark": "bar",
    "encoding": {
        "x": {"field": "category", "type": "nominal", "axis": {"labelAngle": 0}},
        "y": {"field": "value", "type": "quantitative"}
    }
};

// Embed the chart into the specified container
vegaEmbed('#barchart', chart1Spec);
