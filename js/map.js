// Interactive Map functionality using Google Maps API

let map;
let markers = [];
let infoWindows = [];

function initMap() {
    // Initialize map only if map container exists
    const mapContainer = document.getElementById('map');
    if (!mapContainer) return;

    // Initialize the map centered on India
    map = new google.maps.Map(mapContainer, {
        center: { lat: 20.5937, lng: 78.9629 },
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [
            // Custom styling to match the theme
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#e9e9e9' }]
            },
            {
                featureType: 'landscape',
                elementType: 'geometry',
                stylers: [{ color: '#f5f5f5' }]
            }
        ]
    });

    // State coordinates and data
    const statesData = {
        'Maharashtra': { lat: 19.0760, lng: 72.8777, color: '#e53e3e' },
        'Kerala': { lat: 10.8505, lng: 76.2711, color: '#e53e3e' },
        'Gujarat': { lat: 22.2587, lng: 71.1924, color: '#3182ce' },
        'Uttarakhand': { lat: 30.0668, lng: 79.0193, color: '#e53e3e' },
        'Tamil Nadu': { lat: 11.1271, lng: 78.6569, color: '#e53e3e' },
        'West Bengal': { lat: 22.9868, lng: 87.8550, color: '#3182ce' },
        'Rajasthan': { lat: 27.0238, lng: 74.2179, color: '#3182ce' },
        'Himachal Pradesh': { lat: 31.1048, lng: 77.1734, color: '#e53e3e' },
        'Punjab': { lat: 31.1471, lng: 75.3412, color: '#38a169' },
        'Haryana': { lat: 29.0588, lng: 76.0856, color: '#38a169' },
        'Uttar Pradesh': { lat: 26.8467, lng: 80.9462, color: '#3182ce' },
        'Bihar': { lat: 25.0961, lng: 85.3131, color: '#3182ce' },
        'Jharkhand': { lat: 23.6102, lng: 85.2799, color: '#3182ce' },
        'Chhattisgarh': { lat: 21.2787, lng: 81.8661, color: '#38a169' },
        'Madhya Pradesh': { lat: 22.9734, lng: 78.6569, color: '#3182ce' },
        'Odisha': { lat: 20.9517, lng: 85.0985, color: '#3182ce' },
        'Andhra Pradesh': { lat: 15.9129, lng: 79.7400, color: '#3182ce' },
        'Telangana': { lat: 18.1124, lng: 79.0193, color: '#3182ce' },
        'Karnataka': { lat: 15.3173, lng: 75.7139, color: '#3182ce' },
        'Goa': { lat: 15.2993, lng: 74.1240, color: '#38a169' },
        'Delhi': { lat: 28.7041, lng: 77.1025, color: '#38a169' },
        'Jammu and Kashmir': { lat: 33.7782, lng: 76.5762, color: '#3182ce' },
        'Ladakh': { lat: 34.1526, lng: 77.5771, color: '#38a169' },
        'Puducherry': { lat: 11.9416, lng: 79.8083, color: '#38a169' },
        'Chandigarh': { lat: 30.7333, lng: 76.7794, color: '#38a169' },
        'Dadra and Nagar Haveli and Daman and Diu': { lat: 20.3974, lng: 72.8328, color: '#38a169' },
        'Lakshadweep': { lat: 10.5667, lng: 72.6417, color: '#38a169' },
        'Andaman and Nicobar Islands': { lat: 11.7401, lng: 92.6586, color: '#38a169' }
    };

    // Add markers for each state
    Object.keys(statesData).forEach(stateName => {
        const state = statesData[stateName];
        const marker = new google.maps.Marker({
            position: { lat: state.lat, lng: state.lng },
            map: map,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 8,
                fillColor: state.color,
                fillOpacity: 0.7,
                strokeColor: state.color,
                strokeWeight: 2
            },
            title: stateName
        });

        // Create info window content
        const infoWindow = new google.maps.InfoWindow({
            content: `
                <div class="state-popup">
                    <h3>${stateName}</h3>
                    <div id="state-info-${stateName.replace(/\s+/g, '-').toLowerCase()}">
                        <p>Loading disaster information...</p>
                    </div>
                </div>
            `
        });

        // Load disaster data when marker is clicked
        marker.addListener('click', async function() {
            const infoDiv = document.getElementById(`state-info-${stateName.replace(/\s+/g, '-').toLowerCase()}`);
            if (!infoDiv) return;

            try {
                const disasterData = await disasterAPI.getDisasterData(stateName);
                infoDiv.innerHTML = `
                    <div class="disaster-list">
                        <strong>Major Disasters:</strong> ${disasterData.majorDisasters.join(', ')}
                    </div>
                    <div class="disaster-list">
                        <strong>Risk Level:</strong> ${disasterData.riskLevel}
                    </div>
                    <div class="disaster-list">
                        <strong>Last Major Incident:</strong> ${disasterData.lastIncident}
                    </div>
                    <div class="tips-list">
                        <strong>Preparedness Tips:</strong>
                        <ul>
                            ${disasterData.preparednessTips.map(tip => `<li>${tip}</li>`).join('')}
                        </ul>
                    </div>
                `;
            } catch (error) {
                infoDiv.innerHTML = `
                    <p>Disaster information not available for ${stateName}.</p>
                    <p>Please check with local authorities for specific guidelines.</p>
                `;
            }

            infoWindow.open(map, marker);
        });

        markers.push(marker);
        infoWindows.push(infoWindow);
    });

    // Load and display recent disasters
    async function loadRecentDisasters() {
        const disastersList = document.getElementById('disasters-list');
        if (!disastersList) return;

        try {
            const disasters = await disasterAPI.getRecentDisasters();
            disastersList.innerHTML = disasters.map(disaster => `
                <div class="disaster-item" style="margin-bottom: 1rem; padding: 0.5rem; border-left: 4px solid ${disaster.severity === 'High' ? '#e53e3e' : disaster.severity === 'Moderate' ? '#d69e2e' : '#38a169'}; background: #f7fafc;">
                    <h4 style="margin: 0 0 0.5rem 0; color: #1a365d;">${disaster.title}</h4>
                    <p style="margin: 0; color: #718096;"><strong>Location:</strong> ${disaster.location}</p>
                    <p style="margin: 0; color: #718096;"><strong>Date:</strong> ${new Date(disaster.date).toLocaleDateString()}</p>
                    <p style="margin: 0; color: #718096;"><strong>Type:</strong> ${disaster.type} | <strong>Severity:</strong> ${disaster.severity}</p>
                </div>
            `).join('');
        } catch (error) {
            disastersList.innerHTML = '<p>Error loading recent disasters. Please try again later.</p>';
        }
    }

    // Load recent disasters on page load
    loadRecentDisasters();

    // Add search functionality
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search for a state...';
    searchInput.style.cssText = `
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 1000;
        padding: 8px 12px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 14px;
        width: 200px;
    `;

    map.getDiv().appendChild(searchInput);

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        markers.forEach((marker, index) => {
            const stateName = Object.keys(statesData)[index];
            if (stateName.toLowerCase().includes(searchTerm)) {
                marker.setVisible(true);
                if (searchTerm) {
                    // Open info window for matching states
                    google.maps.event.trigger(marker, 'click');
                }
            } else {
                marker.setVisible(false);
                infoWindows[index].close();
            }
        });
    });

    // Handle map resize
    google.maps.event.addDomListener(window, 'resize', function() {
        google.maps.event.trigger(map, 'resize');
    });

    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.target.tagName.toLowerCase() === 'input') return;

        switch(e.key) {
            case '+':
            case '=':
                map.setZoom(map.getZoom() + 1);
                break;
            case '-':
                map.setZoom(map.getZoom() - 1);
                break;
            case 'ArrowUp':
                map.panBy(0, -100);
                break;
            case 'ArrowDown':
                map.panBy(0, 100);
                break;
            case 'ArrowLeft':
                map.panBy(-100, 0);
                break;
            case 'ArrowRight':
                map.panBy(100, 0);
                break;
        }
    });

    // Log map interactions for analytics
    map.addListener('click', function(e) {
        console.log('Map clicked at:', e.latLng.toJSON());
    });

    map.addListener('zoom_changed', function() {
        console.log('Map zoomed to level:', map.getZoom());
    });
}
