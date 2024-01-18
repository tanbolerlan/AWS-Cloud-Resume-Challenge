document.addEventListener("DOMContentLoaded", function () {
  // Get all elements with the class 'toggle-text-btn'
  var toggleButtons = document.getElementsByClassName("toggle-text-btn");

  // Loop through each button and add a click event listener
  for (var i = 0; i < toggleButtons.length; i++) {
    toggleButtons[i].addEventListener("click", function () {
      // Find the closest parent with the class 'toggle-container'
      var toggleContainer = this.closest(".toggle-container");

      // Find the next sibling element within the same container (in this case, the hidden text)
      var hiddenText = toggleContainer.querySelector(".hidden-text");

      // Toggle the display of the hidden text
      if (
        hiddenText.style.display === "none" ||
        hiddenText.style.display === ""
      ) {
        hiddenText.style.display = "block";
      } else {
        hiddenText.style.display = "none";
      }
    });
  }
});
