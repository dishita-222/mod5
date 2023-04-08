// Get the category name from the URL query parameter
var urlParams = new URLSearchParams(window.location.search);
var categoryName = urlParams.get("name");

// Set the category name in the page heading
$("#category-name").text(categoryName);

// Define the menu items
var menuItems = [
  { name: "Hamburger", category: "Lunch" },
  { name: "Pizza", category: "Dinner" },
  { name: "Sushi Roll", category: "Sushi" },
  { name: "Soda", category: "Beverages" },
  { name: "Ice Cream", category: "Desserts" }
];

// Filter the menu items based on the category name
$("#category").html(categoryHtml);