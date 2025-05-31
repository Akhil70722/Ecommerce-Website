import React, { useState, useEffect } from 'react';
import './ProfitAnalysis.css';
import * as Papa from 'papaparse';

import {
  Line,
  Bar,
  Pie,
  Scatter,
  Radar,
} from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Tooltip,
  Legend
);

const ProfitAnalysis = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchCSV = async () => {
      const response = await fetch('/Final_College_Shopping_Dataset_With_Month.csv');
      const csvText = await response.text();

      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          const parsedData = results.data.map(row => ({
            ...row,
            'Selling Price': parseFloat(row['Selling Price']) || 0,
            'Cost Price': parseFloat(row['Cost Price']) || 0,
            'Units Sold': parseInt(row['Units Sold']) || 0,
          }));
          setData(parsedData);
        }
      });
    };

    fetchCSV();
  }, []);

  if (!data.length) return <div>Loading...</div>;

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const profitData = data.map(row => ({
    month: row['Month'],
    product: row['Product'],
    college: row['College'],
    unitsSold: row['Units Sold'],
    profit: (row['Selling Price'] - row['Cost Price']) * row['Units Sold'],
    cost: row['Cost Price'],
    selling: row['Selling Price'],
  }));

  const monthlyProfit = months.map(month => {
    const total = profitData
      .filter(row => row.month === month)
      .reduce((sum, row) => sum + row.profit, 0);
    return { month, profit: total };
  });

  const profitByProduct = profitData.reduce((acc, row) => {
    acc[row.product] = (acc[row.product] || 0) + row.profit;
    return acc;
  }, {});

  const quantityByProduct = profitData.reduce((acc, row) => {
    acc[row.product] = (acc[row.product] || 0) + row.unitsSold;
    return acc;
  }, {});

  const profitByCollege = profitData.reduce((acc, row) => {
    acc[row.college] = (acc[row.college] || 0) + row.profit;
    return acc;
  }, {});

  const discountImpactData = profitData.map(row => ({
    discount: Math.max(0, row.selling - row.cost),
    profit: row.profit,
  }));

  const seasonalProfit = {
    Winter: 0,
    Spring: 0,
    Summer: 0,
    Autumn: 0,
  };

  profitData.forEach(row => {
    const m = row.month;
    let season = 'Winter';
    if (['March', 'April', 'May'].includes(m)) season = 'Spring';
    else if (['June', 'July', 'August'].includes(m)) season = 'Summer';
    else if (['September', 'October', 'November'].includes(m)) season = 'Autumn';
    seasonalProfit[season] += row.profit;
  });

  // Chart configs
  const profitOverTimeConfig = {
    labels: monthlyProfit.map(item => item.month),
    datasets: [
      {
        label: 'Monthly Profit',
        data: monthlyProfit.map(item => item.profit),
        backgroundColor: 'rgba(75, 192, 192, 0.4)',
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const quantityByProductConfig = {
    labels: Object.keys(quantityByProduct),
    datasets: [
      {
        label: 'Quantity Sold by Product',
        data: Object.values(quantityByProduct),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  const profitByCollegeConfig = {
    labels: Object.keys(profitByCollege),
    datasets: [
      {
        label: 'Profit by College',
        data: Object.values(profitByCollege),
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'
        ],
      },
    ],
  };

  const discountImpactConfig = {
    datasets: [
      {
        label: 'Discount vs Profit',
        data: discountImpactData.map(item => ({
          x: item.discount,
          y: item.profit,
        })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const seasonalProfitConfig = {
    labels: Object.keys(seasonalProfit),
    datasets: [
      {
        label: 'Profit by Season',
        data: Object.values(seasonalProfit),
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'
        ],
      },
    ],
  };

  return (
    <div className="profit-analysis flex gap-10 mx-auto px-10 flex-col">
      <h2>Profit Analysis Dashboard</h2>

      <div>
        <h3>Monthly Profit Table</h3>
        <table className="profit-table">
          <thead>
            <tr>
              <th>Month</th>
              <th>Profit (₹)</th>
            </tr>
          </thead>
          <tbody>
            {monthlyProfit.map((row, index) => (
              <tr key={index}>
                <td>{row.month}</td>
                <td>₹{row.profit.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h3>Profit Over Time</h3>
        <Line data={profitOverTimeConfig} />
      </div>

      <div>
        <h3>Quantity Sold by Product</h3>
        <Bar data={quantityByProductConfig} />
      </div>

      <div>
        <h3>Profit by College</h3>
        <Pie data={profitByCollegeConfig} />
      </div>

      <div>
        <h3>Discount vs Profit</h3>
        <Scatter data={discountImpactConfig} />
      </div>

      <div>
        <h3>Seasonal Profit Distribution</h3>
        <Radar data={seasonalProfitConfig} />
      </div>
    </div>
  );
};

export default ProfitAnalysis;
