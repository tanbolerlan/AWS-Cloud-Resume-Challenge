// Initialize the count
let visitCount = 0;

// Fetch the new visit count from the Lambda function
fetch(
  "https://2ifgo9sice.execute-api.eu-north-1.amazonaws.com/default/resume-website-function"
)
  .then((response) => response.json())
  .then((data) => {
    // Use the new_count returned from the Lambda function
    visitCount = data.new_count;

    // Display the visit count on the webpage
    document.getElementById("visit-count").innerText =
      "Total amount of visitors: " + visitCount;
  })
  .catch((error) => {
    console.error("Error fetching visit count:", error);

    // Display an error message on the webpage
    document.getElementById("visit-count").innerText =
      "Error fetching visit count. Please try again later.";
  });
