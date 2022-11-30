import React from 'react';
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

    const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Mujeres',
                data: clients.femeninos.map((e) => (e.length > 0) ? e[0].cantidad : 0),
                // data: labels.map(() => (Math.random()) + (Math.random())),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Hombres',
                data: clients.masculinos.map((e) => (e.length > 0) ? e[0].cantidad : 0),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return (
        <Bar options={options} data={data} />
    )
}
