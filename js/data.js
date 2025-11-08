// Indian states data for map functionality

const indianStatesData = {
    // State data with coordinates, disaster information, and preparedness tips
    states: {
        'Maharashtra': {
            coordinates: [19.0760, 72.8777],
            majorDisasters: ['Floods', 'Cyclones', 'Earthquakes'],
            riskLevel: 'High',
            population: 112374333,
            area: 307713,
            lastMajorIncident: 'Cyclone Nisarga (2020)',
            emergencyContacts: {
                police: '100',
                fire: '101',
                ambulance: '108'
            },
            preparednessTips: [
                'Keep emergency kit ready with water, food, and medicines',
                'Follow IMD warnings for cyclones and heavy rains',
                'Know the location of nearest cyclone shelters',
                'Have an evacuation plan for flood-prone areas'
            ],
            keyLocations: [
                'Mumbai - Coastal flooding risk',
                'Pune - Landslide prone areas',
                'Konkan Coast - Cyclone vulnerable'
            ]
        },

        'Kerala': {
            coordinates: [10.8505, 76.2711],
            majorDisasters: ['Floods', 'Landslides'],
            riskLevel: 'High',
            population: 33406061,
            area: 38863,
            lastMajorIncident: 'Floods (2018)',
            emergencyContacts: {
                police: '100',
                fire: '101',
                ambulance: '108'
            },
            preparednessTips: [
                'Monitor weather updates regularly',
                'Avoid low-lying areas during monsoon',
                'Learn swimming and water safety',
                'Keep important documents in waterproof containers'
            ],
            keyLocations: [
                'Kochi - Port area flooding',
                'Wayanad - Landslide prone',
                'Idukki - Dam safety areas'
            ]
        },

        'Gujarat': {
            coordinates: [22.2587, 71.1924],
            majorDisasters: ['Earthquakes', 'Cyclones'],
            riskLevel: 'Moderate',
            population: 60439692,
            area: 196024,
            lastMajorIncident: 'Earthquake (2001)',
            emergencyContacts: {
                police: '100',
                fire: '101',
                ambulance: '108'
            },
            preparednessTips: [
                'Secure heavy furniture and appliances',
                'Know safe spots in each room (under tables, door frames)',
                'Have emergency contact list ready',
                'Keep flashlight and batteries handy'
            ],
            keyLocations: [
                'Bhuj - Earthquake prone',
                'Gandhinagar - Administrative center',
                'Surat - Flood risk areas'
            ]
        },

        'Uttarakhand': {
            coordinates: [30.0668, 79.0193],
            majorDisasters: ['Landslides', 'Floods', 'Earthquakes'],
            riskLevel: 'High',
            population: 10086292,
            area: 53483,
            lastMajorIncident: 'Floods (2013)',
            emergencyContacts: {
                police: '100',
                fire: '101',
                ambulance: '108'
            },
            preparednessTips: [
                'Avoid construction in hilly and landslide-prone areas',
                'Plant trees to stabilize slopes',
                'Have emergency supplies for at least 72 hours',
                'Know the location of helipads for evacuation'
            ],
            keyLocations: [
                'Chamoli - Glacier areas',
                'Dehradun - Capital city',
                'Nainital - Tourist areas'
            ]
        },

        'Tamil Nadu': {
            coordinates: [11.1271, 78.6569],
            majorDisasters: ['Cyclones', 'Floods', 'Tsunami'],
            riskLevel: 'High',
            population: 72147030,
            area: 130058,
            lastMajorIncident: 'Cyclone Gaja (2018)',
            emergencyContacts: {
                police: '100',
                fire: '101',
                ambulance: '108'
            },
            preparednessTips: [
                'Coastal areas: evacuate when cyclone warning issued',
                'Keep boats and fishing equipment secured',
                'Stock emergency supplies for at least a week',
                'Know tsunami evacuation routes'
            ],
            keyLocations: [
                'Chennai - Coastal city',
                'Cuddalore - Tsunami affected (2004)',
                'Nagapattinam - Cyclone prone'
            ]
        },

        'West Bengal': {
            coordinates: [22.9868, 87.8550],
            majorDisasters: ['Cyclones', 'Floods'],
            riskLevel: 'Moderate',
            population: 91276115,
            area: 88752,
            lastMajorIncident: 'Cyclone Amphan (2020)',
            emergencyContacts: {
                police: '100',
                fire: '101',
                ambulance: '108'
            },
            preparednessTips: [
                'Reinforce homes with cyclone straps',
                'Have flood insurance for properties',
                'Know emergency evacuation routes',
                'Keep important documents in waterproof bags'
            ],
            keyLocations: [
                'Kolkata - River flooding',
                'Sundarbans - Cyclone prone',
                'Darjeeling - Landslide areas'
            ]
        },

        'Rajasthan': {
            coordinates: [27.0238, 74.2179],
            majorDisasters: ['Droughts', 'Heatwaves'],
            riskLevel: 'Moderate',
            population: 68548437,
            area: 342239,
            lastMajorIncident: 'Heatwave (2019)',
            emergencyContacts: {
                police: '100',
                fire: '101',
                ambulance: '108'
            },
            preparednessTips: [
                'Stay hydrated during summer months',
                'Avoid outdoor work during peak heat (11 AM - 4 PM)',
                'Use AC and fans wisely to prevent power outages',
                'Have water conservation measures in place'
            ],
            keyLocations: [
                'Jaisalmer - Desert heat',
                'Jaipur - Urban heat island',
                'Barmer - Drought prone'
            ]
        },

        'Himachal Pradesh': {
            coordinates: [31.1048, 77.1734],
            majorDisasters: ['Landslides', 'Cloudbursts'],
            riskLevel: 'High',
            population: 6864602,
            area: 55673,
            lastMajorIncident: 'Cloudburst (2023)',
            emergencyContacts: {
                police: '100',
                fire: '101',
                ambulance: '108'
            },
            preparednessTips: [
                'Monitor weather forecasts for cloudburst warnings',
                'Avoid risky trekking during monsoon',
                'Have rain gear and warm clothing ready',
                'Know locations of emergency shelters'
            ],
            keyLocations: [
                'Shimla - Capital city',
                'Manali - Tourist areas',
                'Kullu - Valley areas'
            ]
        },

        'Punjab': {
            coordinates: [31.1471, 75.3412],
            majorDisasters: ['Floods', 'Heatwaves'],
            riskLevel: 'Low',
            population: 27743338,
            area: 50362,
            lastMajorIncident: 'Floods (2014)',
            emergencyContacts: {
                police: '100',
                fire: '101',
                ambulance: '108'
            },
            preparednessTips: [
                'Be prepared for sudden weather changes',
                'Have emergency water and food supplies',
                'Know how to shut off utilities',
                'Keep important documents safe'
            ],
            keyLocations: [
                'Amritsar - Border areas',
                'Ludhiana - Industrial city',
                'Jalandhar - Urban areas'
            ]
        },

        'Haryana': {
            coordinates: [29.0588, 76.0856],
            majorDisasters: ['Floods', 'Heatwaves'],
            riskLevel: 'Low',
            population: 25351462,
            area: 44212,
            lastMajorIncident: 'Floods (2013)',
            emergencyContacts: {
                police: '100',
                fire: '101',
                ambulance: '108'
            },
            preparednessTips: [
                'Monitor weather updates',
                'Have emergency kit ready',
                'Know evacuation routes',
                'Keep vehicles fueled'
            ],
            keyLocations: [
                'Gurugram - Urban flooding',
                'Faridabad - Industrial area',
                'Hisar - Rural areas'
            ]
        },

        'Uttar Pradesh': {
            coordinates: [26.8467, 80.9462],
            majorDisasters: ['Floods', 'Heatwaves'],
            riskLevel: 'Moderate',
            population: 199812341,
            area: 240928,
            lastMajorIncident: 'Floods (2017)',
            emergencyContacts: {
                police: '100',
                fire: '101',
                ambulance: '108'
            },
            preparednessTips: [
                'Stay informed about river water levels',
                'Have elevated storage for important items',
                'Know how to reach higher ground quickly',
                'Keep emergency contacts updated'
            ],
            keyLocations: [
                'Lucknow - State capital',
                'Kanpur - Industrial city',
                'Varanasi - River areas'
            ]
        },

        'Bihar': {
            coordinates: [25.0961, 85.3131],
            majorDisasters: ['Floods', 'Earthquakes'],
            riskLevel: 'Moderate',
            population: 104099452,
            area: 94163,
            lastMajorIncident: 'Floods (2017)',
            emergencyContacts: {
                police: '100',
                fire: '101',
                ambulance: '108'
            },
            preparednessTips: [
                'Monitor river water levels',
                'Have emergency supplies ready',
                'Know safe routes to higher ground',
                'Keep livestock safe during floods'
            ],
            keyLocations: [
                'Patna - State capital',
                'Bhagalpur - River areas',
                'Muzaffarpur - Flood prone'
            ]
        },

        'Jharkhand': {
            coordinates: [23.6102, 85.2799],
            majorDisasters: ['Floods', 'Landslides'],
            riskLevel: 'Moderate',
            population: 32988134,
            area: 79714,
            lastMajorIncident: 'Floods (2017)',
            emergencyContacts: {
                police: '100',
                fire: '101',
                ambulance: '108'
            },
            preparednessTips: [
                'Be aware of mining area risks',
                'Have emergency evacuation plans',
                'Keep important documents safe',
                'Monitor weather updates'
            ],
            keyLocations: [
                'Ranchi - State capital',
                'Jamshedpur - Industrial area',
                'Dhanbad - Mining areas'
            ]
        },

        'Chhattisgarh': {
            coordinates: [21.2787, 81.8661],
            majorDisasters: ['Floods', 'Droughts'],
            riskLevel: 'Low',
            population: 25545198,
            area: 135191,
            lastMajorIncident: 'Floods (2014)',
            emergencyContacts: {
                police: '100',
                fire: '101',
                ambulance: '108'
            },
            preparednessTips: [
                'Conserve water during dry periods',
                'Have rain harvesting systems',
                'Be prepared for sudden floods',
                'Keep emergency supplies'
            ],
            keyLocations: [
                'Raipur - State capital',
                'Bilaspur - Industrial area',
                'Jagdalpur - Tribal areas'
            ]
        },

        'Madhya Pradesh': {
            coordinates: [22.9734, 78.6569],
            majorDisasters: ['Floods', 'Droughts'],
            riskLevel: 'Moderate',
            population: 72626809,
            area: 308245,
            lastMajorIncident: 'Floods (2013)',
            emergencyContacts: {
                police: '100',
                fire: '101',
                ambulance: '108'
            },
            preparednessTips: [
                'Monitor weather forecasts',
                'Have emergency water supplies',
                'Know safe shelter locations',
                'Keep vehicles maintained'
            ],
            keyLocations: [
                'Bhopal - State capital',
                'Indore - Commercial hub',
                'Jabalpur - Industrial area'
            ]
        },

        'Odisha': {
            coordinates: [20.9517, 85.0985],
            majorDisasters: ['Cyclones', 'Floods'],
            riskLevel: 'Moderate',
            population: 41974218,
            area: 155707,
            lastMajorIncident: 'Cyclone Fani (2019)',
            emergencyContacts: {
                police: '100',
                fire: '101',
                ambulance: '108'
            },
            preparednessTips: [
                'Coastal areas: have evacuation plans',
                'Reinforce homes against cyclones',
                'Stock emergency supplies',
                'Know cyclone shelter locations'
            ],
            keyLocations: [
                'Bhubaneswar - State capital',
                'Cuttack - Historical city',
                'Puri - Coastal tourism'
            ]
        },

        'Andhra Pradesh': {
            coordinates: [15.9129, 79.7400],
            majorDisasters: ['Cyclones', 'Floods', 'Heatwaves'],
            riskLevel: 'Moderate',
            population: 49577103,
            area: 162968,
            lastMajorIncident: 'Cyclone Hudhud (2014)',
            emergencyContacts: {
                police: '100',
                fire: '101',
                ambulance: '108'
            },
            preparednessTips: [
                'Coastal areas: evacuate when warned',
                'Stay indoors during heatwaves',
                'Have water conservation measures',
                'Keep emergency supplies ready'
            ],
            keyLocations: [
                'Visakhapatnam - Port city',
                'Vijayawada - River areas',
                'Tirupati - Pilgrim center'
            ]
        },

        'Telangana': {
            coordinates: [18.1124, 79.0193],
            majorDisasters: ['Floods', 'Heatwaves'],
            riskLevel: 'Moderate',
            population: 35003674,
            area: 114840,
            lastMajorIncident: 'Floods (2020)',
            emergencyContacts: {
                police: '100',
                fire: '101',
                ambulance: '108'
            },
            preparednessTips: [
                'Monitor weather updates',
                'Have emergency water supplies',
                'Know safe routes',
                'Keep important documents safe'
            ],
            keyLocations: [
                'Hyderabad - State capital',
                'Warangal - Historical city',
                'Karimnagar - Agricultural area'
            ]
        },

        'Karnataka': {
            coordinates: [15.3173, 75.7139],
            majorDisasters: ['Floods', 'Droughts'],
            riskLevel: 'Moderate',
            population: 61095297,
            area: 191791,
            lastMajorIncident: 'Floods (2019)',
            emergencyContacts: {
                police: '100',
                fire: '101',
                ambulance: '108'
            },
            preparednessTips: [
                'Conserve water during droughts',
                'Have rain harvesting systems',
                'Monitor river levels',
                'Keep emergency supplies'
            ],
            keyLocations: [
                'Bangalore - State capital',
                'Mysore - Cultural center',
                'Mangalore - Coastal city'
            ]
        },

        'Goa': {
            coordinates: [15.2993, 74.1240],
            majorDisasters: ['Floods', 'Landslides'],
            riskLevel: 'Low',
            population: 1458545,
            area: 3702,
            lastMajorIncident: 'Floods (2017)',
            emergencyContacts: {
                police: '100',
                fire: '101',
                ambulance: '108'
            },
            preparednessTips: [
                'Monitor weather during monsoon',
                'Have emergency evacuation plans',
                'Keep important documents safe',
                'Know location of emergency services'
            ],
            keyLocations: [
                'Panaji - State capital',
                'Margao - Commercial hub',
                'Mapusa - Market town'
            ]
        },

        'Delhi': {
            coordinates: [28.7041, 77.1025],
            majorDisasters: ['Floods', 'Heatwaves'],
            riskLevel: 'Low',
            population: 16787941,
            area: 1484,
            lastMajorIncident: 'Floods (2010)',
            emergencyContacts: {
                police: '100',
                fire: '101',
                ambulance: '108'
            },
            preparednessTips: [
                'Monitor air quality during heatwaves',
                'Have emergency water supplies',
                'Know metro routes for evacuation',
                'Keep emergency contacts updated'
            ],
            keyLocations: [
                'New Delhi - Capital area',
                'Noida - Satellite city',
                'Gurgaon - Commercial hub'
            ]
        },

        'Jammu and Kashmir': {
            coordinates: [33.7782, 76.5762],
            majorDisasters: ['Earthquakes', 'Landslides', 'Floods'],
            riskLevel: 'Moderate',
            population: 12267032,
            area: 222236,
            lastMajorIncident: 'Floods (2014)',
            emergencyContacts: {
                police: '100',
                fire: '101',
                ambulance: '108'
            },
            preparednessTips: [
                'Be prepared for aftershocks during earthquakes',
                'Have emergency supplies for remote areas',
                'Know helipad locations',
                'Monitor weather in mountainous regions'
            ],
            keyLocations: [
                'Srinagar - Valley areas',
                'Jammu - Plains area',
                'Leh - High altitude'
            ]
        },

        'Ladakh': {
            coordinates: [34.1526, 77.5771],
            majorDisasters: ['Earthquakes', 'Landslides'],
            riskLevel: 'Low',
            population: 274000,
            area: 59146,
            lastMajorIncident: 'Earthquakes (2010)',
            emergencyContacts: {
                police: '100',
                fire: '101',
                ambulance: '108'
            },
            preparednessTips: [
                'Be prepared for extreme weather',
                'Have emergency supplies for isolation',
                'Know locations of emergency shelters',
                'Monitor road conditions'
            ],
            keyLocations: [
                'Leh - Administrative center',
                'Kargil - Border area',
                'Nubra Valley - Remote areas'
            ]
        },

        'Puducherry': {
            coordinates: [11.9416, 79.8083],
            majorDisasters: ['Cyclones', 'Floods'],
            riskLevel: 'Low',
            population: 1247953,
            area: 479,
            lastMajorIncident: 'Cyclone Thane (2011)',
            emergencyContacts: {
                police: '100',
                fire: '101',
                ambulance: '108'
            },
            preparednessTips: [
                'Coastal areas: have evacuation plans',
                'Monitor weather updates',
                'Keep emergency supplies ready',
                'Know location of cyclone shelters'
            ],
            keyLocations: [
                'Puducherry - Main town',
                'Karaikal - Enclave',
                'Mahe - Coastal area'
            ]
        },

        'Chandigarh': {
            coordinates: [30.7333, 76.7794],
            majorDisasters: ['Floods', 'Heatwaves'],
            riskLevel: 'Low',
            population: 1055450,
            area: 114,
            lastMajorIncident: 'Floods (2013)',
            emergencyContacts: {
                police: '100',
                fire: '101',
                ambulance: '108'
            },
            preparednessTips: [
                'Monitor weather forecasts',
                'Have emergency water supplies',
                'Know safe routes',
                'Keep important documents safe'
            ],
            keyLocations: [
                'Chandigarh - Union territory',
                'Panchkula - Neighboring area',
                'Mohali - Industrial area'
            ]
        },

        'Dadra and Nagar Haveli and Daman and Diu': {
            coordinates: [20.3974, 72.8328],
            majorDisasters: ['Cyclones', 'Floods'],
            riskLevel: 'Low',
            population: 585764,
            area: 603,
            lastMajorIncident: 'Cyclone (2018)',
            emergencyContacts: {
                police: '100',
                fire: '101',
                ambulance: '108'
            },
            preparednessTips: [
                'Coastal areas: evacuate when warned',
                'Have emergency supplies',
                'Know safe shelter locations',
                'Monitor weather updates'
            ],
            keyLocations: [
                'Daman - Coastal town',
                'Diu - Island territory',
                'Silvassa - Administrative center'
            ]
        },

        'Lakshadweep': {
            coordinates: [10.5667, 72.6417],
            majorDisasters: ['Cyclones', 'Tsunami'],
            riskLevel: 'Low',
            population: 64473,
            area: 32,
            lastMajorIncident: 'Tsunami (2004)',
            emergencyContacts: {
                police: '100',
                fire: '101',
                ambulance: '108'
            },
            preparednessTips: [
                'Island communities: have evacuation plans',
                'Keep emergency water and food supplies',
                'Know locations of safe high ground',
                'Monitor weather and sea conditions'
            ],
            keyLocations: [
                'Kavaratti - Administrative center',
                'Minicoy - Southernmost island',
                'Agatti - Airport island'
            ]
        },

        'Andaman and Nicobar Islands': {
            coordinates: [11.7401, 92.6586],
            majorDisasters: ['Cyclones', 'Tsunami', 'Earthquakes'],
            riskLevel: 'Low',
            population: 380581,
            area: 8249,
            lastMajorIncident: 'Tsunami (2004)',
            emergencyContacts: {
                police: '100',
                fire: '101',
                ambulance: '108'
            },
            preparednessTips: [
                'Coastal areas: know tsunami evacuation routes',
                'Have emergency supplies for isolation',
                'Monitor weather and sea conditions',
                'Know locations of emergency shelters'
            ],
            keyLocations: [
                'Port Blair - Administrative center',
                'Diglipur - Northern areas',
                'Campbell Bay - Southern areas'
            ]
        }
    },

    // National emergency numbers
    emergencyNumbers: {
        national: '112',
        police: '100',
        fire: '101',
        ambulance: '108',
        disaster: '1070'
    },

    // Disaster categories and their characteristics
    disasterTypes: {
        floods: {
            description: 'Overflow of water that submerges land',
            causes: ['Heavy rainfall', 'River overflow', 'Dam failure', 'Coastal storm surge'],
            riskStates: ['Maharashtra', 'Kerala', 'Uttarakhand', 'Bihar', 'Assam']
        },
        cyclones: {
            description: 'Rotating storm system with strong winds',
            causes: ['Low pressure systems', 'Ocean temperatures', 'Atmospheric conditions'],
            riskStates: ['Odisha', 'Andhra Pradesh', 'Tamil Nadu', 'West Bengal', 'Gujarat']
        },
        earthquakes: {
            description: 'Sudden shaking of the ground',
            causes: ['Tectonic plate movement', 'Fault lines', 'Volcanic activity'],
            riskStates: ['Gujarat', 'Jammu and Kashmir', 'Himachal Pradesh', 'Uttarakhand']
        },
        landslides: {
            description: 'Movement of rock, earth, or debris down a slope',
            causes: ['Heavy rainfall', 'Earthquakes', 'Deforestation', 'Mining'],
            riskStates: ['Uttarakhand', 'Himachal Pradesh', 'Jammu and Kashmir', 'Sikkim']
        },
        droughts: {
            description: 'Prolonged period of abnormally low rainfall',
            causes: ['Climate change', 'Deforestation', 'Over-extraction of water'],
            riskStates: ['Rajasthan', 'Gujarat', 'Karnataka', 'Maharashtra']
        },
        heatwaves: {
            description: 'Prolonged period of excessively hot weather',
            causes: ['Climate change', 'Urban heat islands', 'Weather patterns'],
            riskStates: ['Rajasthan', 'Maharashtra', 'Andhra Pradesh', 'Telangana']
        },
        tsunami: {
            description: 'Series of large ocean waves caused by underwater earthquake',
            causes: ['Underwater earthquakes', 'Landslides', 'Volcanic eruptions'],
            riskStates: ['Tamil Nadu', 'Kerala', 'Andhra Pradesh', 'Andaman & Nicobar']
        }
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = indianStatesData;
}
