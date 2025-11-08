// API simulation for disaster reports and data fetching

class DisasterAPI {
    constructor() {
        this.reports = JSON.parse(localStorage.getItem('disasterReports')) || [];
        this.disasterData = null;
    }

    // Submit a new disaster report
    async submitReport(reportData) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    const report = {
                        id: Date.now(),
                        ...reportData,
                        timestamp: new Date().toISOString(),
                        status: 'pending'
                    };

                    this.reports.push(report);
                    localStorage.setItem('disasterReports', JSON.stringify(this.reports));

                    // Log the submission
                    console.log('Report submitted:', report);

                    resolve({
                        success: true,
                        message: 'Report submitted successfully',
                        reportId: report.id
                    });
                } catch (error) {
                    reject({
                        success: false,
                        message: 'Failed to submit report',
                        error: error.message
                    });
                }
            }, 1000); // Simulate network delay
        });
    }

    // Get all reports
    async getReports() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.reports);
            }, 500);
        });
    }

    // Get disaster data for a specific state
    async getDisasterData(stateName) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate API call to get disaster data
                const mockData = {
                    'Maharashtra': {
                        majorDisasters: ['Floods', 'Cyclones', 'Earthquakes'],
                        riskLevel: 'High',
                        lastIncident: 'Cyclone Nisarga (2020)',
                        preparednessTips: [
                            'Keep emergency kit ready',
                            'Follow IMD warnings',
                            'Have evacuation plan'
                        ]
                    },
                    'Kerala': {
                        majorDisasters: ['Floods', 'Landslides'],
                        riskLevel: 'High',
                        lastIncident: 'Floods (2018)',
                        preparednessTips: [
                            'Monitor weather updates',
                            'Avoid low-lying areas',
                            'Learn swimming if possible'
                        ]
                    },
                    'Gujarat': {
                        majorDisasters: ['Earthquakes', 'Cyclones'],
                        riskLevel: 'Moderate',
                        lastIncident: 'Earthquake (2001)',
                        preparednessTips: [
                            'Secure heavy furniture',
                            'Know safe spots in home',
                            'Have emergency contacts'
                        ]
                    },
                    'Uttarakhand': {
                        majorDisasters: ['Landslides', 'Floods', 'Earthquakes'],
                        riskLevel: 'High',
                        lastIncident: 'Floods (2013)',
                        preparednessTips: [
                            'Avoid construction in hilly areas',
                            'Plant trees for stability',
                            'Have emergency supplies'
                        ]
                    },
                    'Tamil Nadu': {
                        majorDisasters: ['Cyclones', 'Floods', 'Tsunami'],
                        riskLevel: 'High',
                        lastIncident: 'Cyclone Gaja (2018)',
                        preparednessTips: [
                            'Coastal areas: evacuate when warned',
                            'Keep boats ready',
                            'Stock emergency supplies'
                        ]
                    },
                    'West Bengal': {
                        majorDisasters: ['Cyclones', 'Floods'],
                        riskLevel: 'Moderate',
                        lastIncident: 'Cyclone Amphan (2020)',
                        preparednessTips: [
                            'Reinforce homes',
                            'Have flood insurance',
                            'Know emergency routes'
                        ]
                    },
                    'Rajasthan': {
                        majorDisasters: ['Droughts', 'Heatwaves'],
                        riskLevel: 'Moderate',
                        lastIncident: 'Heatwave (2019)',
                        preparednessTips: [
                            'Stay hydrated',
                            'Avoid outdoor work during peak heat',
                            'Use AC and fans wisely'
                        ]
                    },
                    'Himachal Pradesh': {
                        majorDisasters: ['Landslides', 'Cloudbursts'],
                        riskLevel: 'High',
                        lastIncident: 'Cloudburst (2023)',
                        preparednessTips: [
                            'Monitor weather forecasts',
                            'Avoid risky trekking',
                            'Have rain gear ready'
                        ]
                    }
                };

                const data = mockData[stateName];
                if (data) {
                    resolve(data);
                } else {
                    reject({
                        success: false,
                        message: 'Data not available for this state'
                    });
                }
            }, 800);
        });
    }

    // Get recent disasters (simulated)
    async getRecentDisasters() {
        return new Promise((resolve) => {
            setTimeout(() => {
                const recentDisasters = [
                    {
                        id: 1,
                        title: 'Cyclone Biparjoy',
                        location: 'Gujarat Coast',
                        date: '2023-06-15',
                        type: 'Cyclone',
                        severity: 'High'
                    },
                    {
                        id: 2,
                        title: 'Himachal Pradesh Landslides',
                        location: 'Shimla District',
                        date: '2023-07-10',
                        type: 'Landslide',
                        severity: 'Moderate'
                    },
                    {
                        id: 3,
                        title: 'Kerala Floods',
                        location: 'Multiple Districts',
                        date: '2023-08-01',
                        type: 'Flood',
                        severity: 'High'
                    }
                ];
                resolve(recentDisasters);
            }, 600);
        });
    }

    // Update report status (for admin use)
    async updateReportStatus(reportId, status) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const reportIndex = this.reports.findIndex(r => r.id === reportId);
                if (reportIndex !== -1) {
                    this.reports[reportIndex].status = status;
                    localStorage.setItem('disasterReports', JSON.stringify(this.reports));
                    resolve({
                        success: true,
                        message: 'Report status updated'
                    });
                } else {
                    reject({
                        success: false,
                        message: 'Report not found'
                    });
                }
            }, 500);
        });
    }
}

// Initialize API instance
const disasterAPI = new DisasterAPI();

// Form submission handler
document.addEventListener('DOMContentLoaded', function() {
    const reportForm = document.getElementById('report-form');
    const reportTableBody = document.querySelector('#report-table tbody');

    if (reportForm) {
        reportForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const formData = new FormData(reportForm);
            const reportData = {
                title: formData.get('title'),
                description: formData.get('description'),
                location: formData.get('location'),
                date: formData.get('date')
            };

            try {
                const result = await disasterAPI.submitReport(reportData);
                alert(result.message);

                // Reset form
                reportForm.reset();

                // Refresh reports table
                loadReports();
            } catch (error) {
                alert('Error submitting report: ' + error.message);
            }
        });
    }

    // Load and display reports
    async function loadReports() {
        if (!reportTableBody) return;

        try {
            const reports = await disasterAPI.getReports();
            reportTableBody.innerHTML = '';

            if (reports.length === 0) {
                reportTableBody.innerHTML = '<tr><td colspan="4">No reports submitted yet.</td></tr>';
                return;
            }

            reports.forEach(report => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${report.title}</td>
                    <td>${report.description}</td>
                    <td>${report.location}</td>
                    <td>${new Date(report.date).toLocaleDateString()}</td>
                `;
                reportTableBody.appendChild(row);
            });
        } catch (error) {
            console.error('Error loading reports:', error);
        }
    }

    // Load reports on page load
    loadReports();
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DisasterAPI;
}
