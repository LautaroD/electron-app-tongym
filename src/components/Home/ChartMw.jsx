import React, { useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Nuevos clientes',
        },
    },
};




export default function ChartMw({ clients }) {
    // const [women, setWomen] = useState([]);
    // const [men, setMen] = useState([]);

    // setMen(clients.filter(client => client.gender === 'Masculino'));
    // setWomen(clients.filter(client => client.gender === 'Femenino'));

    const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Mujeres',
                data: labels.map(() => (Math.random()) + (Math.random())),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Hombres',
                data: labels.map(() => (Math.random()) + (Math.random())),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return (
        <Bar options={options} data={data} />
    )
}
