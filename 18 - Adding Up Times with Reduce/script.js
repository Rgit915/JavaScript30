//get all elements with a data-time attribute and convert from NodeList to Array
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
const seconds = timeNodes.map(node => node.dataset.time)