// Initialize the count
let visitCount = 0;

// Check if localStorage is supported
if (typeof Storage !== "undefined") {
  // Check if the visit count is already stored
  if (localStorage.visitCount) {
    visitCount = parseInt(localStorage.visitCount);
  } else {
    // If not, initialize the count
    localStorage.visitCount = 0;
  }

  // Increment the visit count
  visitCount++;
  // Update the local storage
  localStorage.visitCount = visitCount;

  // Display the visit count on the webpage
  document.getElementById("visit-count").innerText =
    "Total amount of visitors: " + visitCount;
} else {
  // If localStorage is not supported
  console.error(
    "LocalStorage is not supported. Visit count cannot be tracked."
  );
}
