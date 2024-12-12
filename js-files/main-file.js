// Function to show the pop-up ad
function showAd() {
    if (window.innerWidth > 700) { // Check if the screen width is greater than 700px
    document.getElementById('popupAd').style.display = 'flex';
    }
   }
   
   // Function to close the pop-up ad
   function closeAd() {
    document.getElementById('popupAd').style.display = 'none';
   }
   
   // Set a timer to show the ad after 10 seconds
   window.onload = function() {
    setTimeout(showAd, 10000); // (showAd, 10000); // 10000 milliseconds = 10 seconds
   };
   