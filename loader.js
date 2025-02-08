 // Simulate a delay (e.g., fetching data)
 setTimeout(function() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
}, 3000); // Simulates a 3-second loading time