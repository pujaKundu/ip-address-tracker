var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();

//fetch api data
const loadData = () => {
    const searchField = document.getElementById('search-field');
    const searchedIP = searchField.value;
    console.log(`serched ip : ${searchedIP}`)
    const url = `https://geo.ipify.org/api/v1?apiKey=at_hVZyHlbap4Eyq0qZ3pSyFRFKk5AJm&ipAddress=${searchedIP}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data));
}
loadData();
const displayData = ip => {
    console.log(ip);

    const ipAddressContainer = document.getElementById('ip-address');
    ipAddressContainer.innerText = `${ip.ip}`;
    const ipLocation = document.getElementById('ip-location');
    ipLocation.innerText = `${ip.location.city},${ip.location.country}`;
    const ipTimezone = document.getElementById('ip-timezone');
    ipTimezone.innerText = `${ip.location.timezone}`;
    const isp = document.getElementById('isp');
    isp.innerText = `${ip.isp}`;
    //update ip on map
    L.marker([51.5, -0.09]).addTo(map)
        .bindPopup(`${ip.ip}`)
        .openPopup();

}

//update map
const updateMap