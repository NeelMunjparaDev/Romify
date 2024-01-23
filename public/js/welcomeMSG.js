// Function to close the dialog
// function closeDialog() {
//   document.getElementById('dialog-overlay').style.display = 'none';
// }

// // Optionally, close the dialog when the user clicks outside of it
// document.addEventListener('click', function (event) {
//   if (event.target.id === 'dialog-overlay') {
//     closeDialog();
//   }
// });

// Function to close the dialog box
function closeDialog() {
  document.getElementById('dialog-overlay').style.display = 'none';
}

// Function to open the dialog box
function openDialog() {
  document.getElementById('dialog-overlay').style.display = 'flex';
}

// Close the dialog box when the overlay is clicked
document
  .getElementById('dialog-overlay')
  .addEventListener('click', function (event) {
    if (event.target === this) {
      closeDialog();
    }
  });

// Optionally, you can add this script to close the dialog when the user presses the Escape key
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeDialog();
  }
});
