// script.js
let is24HourFormat = false;

function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    // Adjust for 12-hour format if needed
    const amPm = hours >= 12 ? 'PM' : 'AM';
    if (!is24HourFormat) {
        hours = hours % 12 || 12;
    }
    
    // Format the time to always show two digits
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    // Update the clock element with the formatted time
    clockElement.textContent = formattedTime + (is24HourFormat ? '' : ` ${amPm}`);
}

function toggleFormat() {
    is24HourFormat = !is24HourFormat;
    document.getElementById('toggleFormat').textContent = is24HourFormat ? 'Switch to 12-hour format' : 'Switch to 24-hour format';
    updateClock();  // Update the clock immediately when toggling format
}

// Set the clock to update every second
setInterval(updateClock, 1000);
updateClock();  // Initial call to display the clock immediately

// Add event listener to the button to toggle between formats
document.getElementById('toggleFormat').addEventListener('click', toggleFormat);
