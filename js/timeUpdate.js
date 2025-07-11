/**
 * @file timeUpdate.js
 * This script handles updating dynamic time and year elements on the page.
 */
document.addEventListener('DOMContentLoaded', () => {
    function updateTime() {
            const getTimeNow = new Date();
            const timeOptions = { 
                hour: '2-digit', 
                minute: '2-digit',
                second: '2-digit',
                timeZone: 'Asia/Jakarta'
            };
            document.getElementById('time').textContent = getTimeNow.toLocaleTimeString('en-US', timeOptions);
        }

        // Function to update year in the footer
        function updateYear() {
            const getYearNow = new Date().getFullYear();
            document.getElementById('year').textContent = getYearNow;
        }

        // Initial call to set the time immediately
        updateTime();
        updateYear();

        // Update the time every second
        setInterval(updateTime, 1000);
});
