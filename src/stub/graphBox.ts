import {ChartData} from "chart.js";

export const graphBoxPolarAreaData: ChartData = {
    labels: ['Facebook', 'YouTube', 'Amazon'],
    datasets: [{
        label: 'Traffic Source',
        data: [1200, 1900, 3000],
        backgroundColor: [
            "rgba(255,99,132,1)",
            "rgba(54,162,235,1)",
            "rgba(255,206,86,1)"
        ]
    }]
}

export const graphBarData: ChartData = {
    labels: [
        'January', 'February', 'March',
        'April', 'May', 'June', 'July',
        'August', 'September', 'October',
        'November', 'December'
    ],
    datasets: [{
        label: 'Earning',
        data: [1290, 1990, 300, 5100, 2200, 3400, 4800, 5000, 3210, 5340, 1236, 7481],
        backgroundColor: [
            "rgba(255,99,132,1)",
            "rgba(54,162,235,1)",
            "rgba(255,206,86,1)",
            "rgba(75,192,192,1)",
            "rgba(153,102,255,1)",
            "rgba(255,159,64,1)",
            "rgba(255,99,132,1)",
            "rgba(54,162,235,1)",
            "rgba(255,206,86,1)",
            "rgba(75,192,192,1)",
            "rgba(153,102,255,1)",
            "rgba(255,159,64,1)"
        ]
    }]
};