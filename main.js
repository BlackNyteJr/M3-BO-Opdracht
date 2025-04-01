function toggleLight(room) {
    alert(room + ' light toggled!');
}
const ctx = document.getElementById('temperatureChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [{
            label: 'Outside Temp',
            data: [16, 18, 15, 12, 10],
            borderColor: 'blue',
            fill: false
        }, {
            label: 'Inside Temp',
            data: [19, 21, 20, 22, 21],
            borderColor: 'orange',
            fill: false
        }]
    },
    options: {
        responsive: true,
    }
});