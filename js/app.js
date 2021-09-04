//fetch api data
const loadData = () => {
    const searchField = document.getElementById('search-field');
    const searchedIP = searchField.value;
    //clear search field
    searchField.value = '';

    const url = `https://geo.ipify.org/api/v1?apiKey=at_hVZyHlbap4Eyq0qZ3pSyFRFKk5AJm&ipAddress=${searchedIP}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data));


}
loadData();

const displayData = ip => {

    const ipAddressContainer = document.getElementById('ip-address');
    ipAddressContainer.innerText = `${ip.ip}`;
    const ipLocation = document.getElementById('ip-location');
    ipLocation.innerText = `${ip.location.city},${ip.location.country}`;
    const ipTimezone = document.getElementById('ip-timezone');
    ipTimezone.innerText = `${ip.location.timezone}`;
    const isp = document.getElementById('isp');
    isp.innerText = `${ip.isp}`;
    //build map
    const ipAddress = `${ip.ip}`;
    const lat = ip.location.lat;
    const lng = ip.location.lng;

    buildMap(lat, lng, ipAddress);

}

function buildMap(lat, lng, ip) {
    document.getElementById('mapUI').innerHTML =
        "<div id='map' style='width: 100%; height: 100%;'></div>";
    var map = L.map('map').setView([lat, lng], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker([lat, lng]).addTo(map)
        .bindPopup(ip)
        .openPopup();

}