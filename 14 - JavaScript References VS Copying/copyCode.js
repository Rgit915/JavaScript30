// Function to copy code from a specified code container to the clipboard
function copyCode(containerId) {
  // Get the code container element by its ID
  const codeContainer = document.getElementById(containerId);

  // Extract the code content from the code container
  const codeToCopy = codeContainer.textContent;

  // Create a temporary textarea element to hold the code and copy it to the clipboard
  const textarea = document.createElement('textarea');
  textarea.value = codeToCopy;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);

  // Provide visual feedback to the user
  alert('Code copied to clipboard!');
}
