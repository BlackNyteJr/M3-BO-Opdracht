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

async function fetchTemperatureData() {
    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric'); // Replace with your actual API URL
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        updateTemperatureChart(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function updateTemperatureChart(data) {
    const ctx = document.getElementById('temperatureChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.labels, // Assuming the API returns labels
            datasets: [{
                label: 'Outside Temp',
                data: data.outsideTemp, // Assuming the API returns outside temperature data
                borderColor: 'blue',
                fill: false
            }, {
                label: 'Inside Temp',
                data: data.insideTemp, // Assuming the API returns inside temperature data
                borderColor: 'orange',
                fill: false
            }]
        },
        options: {
            responsive: true,
        }
    });
}

// Call the function to fetch data when the page loads
fetchTemperatureData();