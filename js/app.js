var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();

//fetch api data
const loadData = () => {
    //ip address dynamic banaw
    const url = `https://geo.ipify.org/api/v1?apiKey=at_hVZyHlbap4Eyq0qZ3pSyFRFKk5AJm&ipAddress=8.8.8.8`;
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data));
}
loadData();