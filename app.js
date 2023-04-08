// Define the click event handler for the Specials tile
$("#specials-tile").click(function() {
    // Define the available categories
    var categories = ["Lunch", "Dinner", "Sushi", "Beverages"];
    
    // Generate a random category name
    var randomCategory = categories[Math.floor(Math.random() * categories.length)];
    
    // Redirect the user to the random category page
    window.location.href = "category.html?name=" + randomCategory;
  });
  