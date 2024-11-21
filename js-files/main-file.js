// Function to show the pop-up ad
function showAd() {
    document.getElementById('popupAd').style.display = 'flex';
}

// Function to close the pop-up ad
function closeAd() {
    document.getElementById('popupAd').style.display = 'none';
}

// Set a timer to show the ad after 15 seconds
window.onload = function() {
    setTimeout(showAd, 10000); // 10000 milliseconds = 10 seconds
};