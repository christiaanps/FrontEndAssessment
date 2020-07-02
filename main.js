$(function () {
    var arrayOfPartenaires = [
        "images/et2.jpg",
        "images/et1.jpg"
    ];
    var loaders = 0;
    function cycleImages() {
        var element = arrayOfPartenaires[loaders];
        $("#imags").css({ 'background-image': 'url(' + element + ')' }).animate({ opacity: 1 }).hide().fadeIn("slow");
        if (loaders < arrayOfPartenaires.length) {
            loaders = loaders + 1;
            if (loaders >= arrayOfPartenaires.length) {
                loaders = 0;
            }
        }
        else {
            loaders = 0;
        }
        console.log(loaders, arrayOfPartenaires[loaders]);
    }
    cycleImages();
    setInterval(function () { cycleImages() }, 3000);
});

function selectFlightArea(evt, areaName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("flightarea");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active-button", " inactive-button");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    evt.currentTarget.className += " active-button";
}