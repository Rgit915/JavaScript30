//get all elements with a data-time attribute and convert from NodeList to Array
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
// Map through timeNodes to extract time data, then map each timeCode to convert minutes and seconds to total seconds
const seconds = timeNodes
    .map(node => node.dataset.time) // Extract time data from data-time attribute
    .map(timeCode => {
        const [mins, secs] = timeCode.split(':').map(parseFloat); // Split timeCode into minutes and seconds, convert to numbers
        return (mins * 60) + secs; // Calculate total seconds and return
    })
    .reduce((total, videoSeconds) => total + videoSeconds);