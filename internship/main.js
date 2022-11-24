new Chart(document.querySelector('canvas').getContext('2d'), {
    type: 'bar',
    data: {
        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        datasets: [
            {
                label: "Chưa hoàn thành",
                borderRadius: 30,
                data: [97,145,195,102,223,152,128,56,94,42,69,3],
                backgroundColor: "#EDEDED",
                barthickness:0.5,
                
            },
            {
                label: "Hoàn thành",
                borderRadius: 30,
                data: [162,215,290,195,343,257,195,162,215,140,101,3],
                backgroundColor: "#4E944F",
                barthickness: 0.5,
            }
        ],
    },
    options : {
        barPercentage: 1,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                align: 'start',
                
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    
                },
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks:{
                    display: false,
                },
                grid: {
                    display: false,
                    drawOnChartArea: false,
                    drawBorder: false
                }
            },
            x: {
                grid: {
                    drawBorder: false,
                    drawOnChartArea: false,
                    display: false,
                    
                }
            }
        }
    }
});
