// For slider of destination page
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showSlide(index) {
        for (let i = 0; i < slides.length; i++) {
            if (i === index) {
                slides[i].classList.remove("hidden"); // Remove hidden class for active slide
                slides[i].style.transform = "translateX(0)";
            } else {
                slides[i].classList.add("hidden"); // Add hidden class for inactive slide
                slides[i].style.transform = "translateX(100%)";
            }
        }
    }
    
    function nextSlide() {
        console.log("Current Slide:", currentSlide);
        showSlide(currentSlide);
        currentSlide = (currentSlide + 1) % slides.length;
        console.log("Next Slide:", currentSlide);
    }

    setInterval(nextSlide, 4000);
});

// For inforamtion on destination
$(document).ready(function () {
    $('#searchButton').click(function () {
        var destination = $('#destinationSearch').val();
        // Call a function to fetch weather, cuisine, currency, and places to visit based on the entered destination
        fetchDestinationInfo(destination);
    });
});
function fetchDestinationInfo(destination) {
        // API endpoint for weather data
        var weatherAPI = 'http://api.weatherapi.com/v1/current.json?key=f43f120bef21464bb8450352241003&q=' + destination;
    
        // Making a POST request to the weather API
        $.post(weatherAPI, function (weatherData) {
            // Extracting relevant weather information from the response
            var location = weatherData.location.name;
            var temperature = weatherData.current.temp_c;
            var condition = weatherData.current.condition.text;
            var hrand = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
            // Updating HTML with weather information
            var destinationInfoHTML = '<h2>' + location + '</h2>';
            destinationInfoHTML += '<p>Temperature: ' + temperature + '°C</p>';
            destinationInfoHTML += '<p>Condition: ' + condition + '</p>';
            var destinationInfoHTML2 = '<h2>Hotels Available: '+ hrand + '</h2>';
            $('#HotelInfo').html(destinationInfoHTML2);
            // Update the destinationInfo div with the fetched weather data
            $('#destinationInfo').html(destinationInfoHTML);
        }).fail(function () {
            // Handle error cases here
            $('#destinationInfo').html('<p>Failed to fetch weather data. Please try again later.</p>');
        });

};
