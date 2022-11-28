import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Circle({ totalClients }) {
    const [positionLegend, setPositionLegend] = useState('top');

    useEffect(() => {
        if (document.defaultView.innerHeight < 900) setPositionLegend('right')

    }, [])


    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
    };

    const data = {
        labels: ['Mujeres', 'Hombres', 'Otro'],
        datasets: [
            {
                data: totalClients,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 0.5,
            },
        ],
    };

    return (
        <Doughnut options={options} data={data} />
    )
}
