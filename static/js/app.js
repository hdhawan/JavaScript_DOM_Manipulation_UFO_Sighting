// from data.js
var tableData = data;
var tbody = d3.select("tbody");

tableData.forEach(function(data) {
    var row = tbody.append("tr")
    row.append("td").text(data.datetime)
    row.append("td").text(data.city)
    row.append("td").text(data.state)
    row.append("td").text(data.country)
    row.append("td").text(data.shape)
    row.append("td").text(data.durationMinutes)
    row.append("td").text(data.comments)
});

filterButton = d3.select("#filter-btn");

filterButton.on("click", function() {
    d3.event.preventDefault();
    document.querySelector("tbody").innerHTML = "";
    var input = d3.select("#datetime");
    var inputValue = input.property("value");
    console.log(input);
    console.log(inputValue);
    var filteredData = tableData.filter(data => data.datetime === inputValue);
    console.log(filteredData);
    filteredData.forEach( data => {
        var row = tbody.append("tr");
        row.append("td").text(data.datetime);
        row.append("td").text(data.city);
        row.append("td").text(data.state);
        row.append("td").text(data.country);
        row.append("td").text(data.shape);
        row.append("td").text(data.durationMinutes);
        row.append("td").text(data.comments);
    });
});


// YOUR CODE HERE!
