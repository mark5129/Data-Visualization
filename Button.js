let isAirlineChartVisible = false; // Track which chart is currently visible

function toggleVisualization() {
  // Determine which chart to display and load it
  if (isAirlineChartVisible) {
    vegaEmbed('#donut_I',  "Donut_International.js").catch(console.warn); // Load Donut_International
  } else {
    vegaEmbed('#donut_A', "Donut_Airline.js").catch(console.warn); // Load Donut_Airline
  }

  // Toggle the visibility state
  isAirlineChartVisible = !isAirlineChartVisible;
}

// Attach the toggle function to the button
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('toggleButton').addEventListener('click', toggleVisualization);

  // Initially load the Donut_Airline chart
  vegaEmbed('#donut_A', Donut_Airline).catch(console.warn);
});
