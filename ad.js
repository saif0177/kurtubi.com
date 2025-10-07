// CONFIGURATION
const adLink = "https://cornhub.website//"; // <-- Replace with your ad URL
const timerDuration = 5; // seconds

// STATE
let canClickAd = false;
let countdown = timerDuration;

// FUNCTION: Start 10-second background timer
function startAdTimer() {
    canClickAd = false;
    countdown = timerDuration;

    const timer = setInterval(() => {
        countdown--;
        if (countdown <= 0) {
            clearInterval(timer);
            canClickAd = true;
        }
    }, 1000);
}

// Start first timer on load
startAdTimer();

// Handle clicks anywhere on the page
document.addEventListener("click", () => {
    if (canClickAd) {
        window.open(adLink, "_blank"); // Open ad in new tab
        startAdTimer(); // Restart 10-second timer after returning
    }
});