import React from 'react';
import "./SocialGraph.css";
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Social Media Statistics',
    },
  },
};

const labels = ['7days', '6days', '5days', '4days', '3days', '2days', '1day'];

const getRandomData = () => {
  return labels.map(() => Math.floor(Math.random() * 2000 - 1000));
};

export const data = {
  labels,
  datasets: [
    {
      label: 'Twitter Followers',
      data: getRandomData(),
      borderColor: 'rgb(255, 91, 00)',
      backgroundColor: 'rgb(255, 91, 00)',
    },
    {
      label: 'Telegram Channel Members',
      data: getRandomData(),
      borderColor: 'rgb(255, 255, 255)',
      backgroundColor: 'rgb(255, 255, 255)',
    },
  ],
};

export default function SocialGraph() {
  return <Line options={options} data={data} className="socialGraphLineChart" />;
}