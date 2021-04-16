// from data.js
var tableData = data;

// YOUR CODE HERE!
// from data.js
//table references
var tbody = d3.select("tbody");

// Building Functions for the table
  // Build the table
function buildTable(data) {
  // 
  tbody.html("");

  // Loops
  data.forEach((dataRow) => {
    var row = tbody.append("tr");
    // Table Cell Loop
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
        cell.text(val);
      }
    );
  });
}


function handleClick() {

  // Date & Time
  var date = d3.select("#datetime").property("value");
  let filteredData = tableData;

  // Filter!
  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  }

  buildTable(filteredData);
}

// Filter with press button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the Table
buildTable(tableData);