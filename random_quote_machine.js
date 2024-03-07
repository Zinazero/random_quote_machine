// Array of quotes with corresponding authors
const quotes = [
    ["Quote 1", "Author 1"],
    ["Quote 2", "Author 2"],
    ["Quote 3", "Author 3"]
  ];
  
  // Randomly select an initial quote
  var x = quotes[Math.floor(Math.random() * quotes.length)];
  
  // Function to refresh the quote
  function refresh() {
    var y;
    
    // Generate a new quote until it is different from the previous one
    do {
      y = quotes[Math.floor(Math.random() * quotes.length)];
    } while (x[0] === y[0] && x[1] === y[1]);
    
    x = y; // Update the current quote to the new quote
    displayQuote(); // Display the updated quote
  }
  
  // Function to display the quote on the webpage
  function displayQuote() {
    var heading = document.getElementById("quote");
    heading.textContent = x[0]; // Set the text content of the quote element
    
    var subheading = document.getElementById("author");
    subheading.textContent = x[1]; // Set the text content of the author element
  }
  
  var newQuote = document.getElementById("new-quote");
  newQuote.addEventListener("click", refresh); // Add event listener to the "New Quote" button
  
  displayQuote(); // Initial quote display
  