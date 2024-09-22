// Ensure the DOM is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the map with a better initial view
    var map = L.map('map').setView([31.0461, 34.8516], 2); // Centered on Israel with zoom level 2

    // Add a tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(map);

    // Add markers for your travel locations
    var locations = [
        { lat: 32.7767, lng: -96.7970, title: 'Dallas' },
        { lat: 27.9759, lng: -82.8001, title: 'Clearwater, Florida' },
        { lat: 40.7128, lng: -74.0060, title: 'New York, New York', highlight: true }
    ];

    // Create an array for the coordinates to connect
    var latLngs = locations.map(location => [location.lat, location.lng]);

    locations.forEach(function(location) {
        L.marker([location.lat, location.lng])
            .addTo(map)
            .bindPopup(location.title);
    });

    // Create a polyline to connect the markers
    var polyline = L.polyline(latLngs, { color: 'blue', weight: 4 }).addTo(map); // Customize color and weight as needed

    // Fit the map to the bounds of the polyline
    map.fitBounds(polyline.getBounds());
});





