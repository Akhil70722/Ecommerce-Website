// src/components/RevenueTracking/RevenueTracking.jsx
import React, { useEffect, useState } from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import * as Papa from 'papaparse';
import './RevenueTracking.css';

import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const RevenueTracking = () => {
  const [revenueData, setRevenueData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCSV = async () => {
      try {
        const response = await fetch('/Final_College_Shopping_Dataset_With_Month.csv');
        const csvText = await response.text();

        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const parsedData = results.data.map((row) => ({
              ...row,
              'Selling Price': parseFloat(row['Selling Price']) || 0,
              'Units Sold': parseInt(row['Units Sold']) || 0,
              revenue: (parseFloat(row['Selling Price']) || 0) * (parseInt(row['Units Sold']) || 0),
            }));
            setRevenueData(parsedData);
            setLoading(false);
          },
        });
      } catch (error) {
        console.error('Error loading CSV:', error);
        setLoading(false);
      }
    };

    fetchCSV();
  }, []);

  if (loading) return <div>Loading revenue data...</div>;
  if (!revenueData.length) return <div>No revenue data available.</div>;

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getMonthIndex = (monthName) => months.indexOf(monthName);

  const monthlyRevenue = months.map((month) => {
    const total = revenueData
      .filter(row => row['Month'] === month)
      .reduce((sum, row) => sum + row.revenue, 0);
    return { month, revenue: total };
  });

  const revenueByProduct = revenueData.reduce((acc, row) => {
    const product = row['Product'];
    acc[product] = (acc[product] || 0) + row.revenue;
    return acc;
  }, {});

  const revenueByCollege = revenueData.reduce((acc, row) => {
    const college = row['College'];
    acc[college] = (acc[college] || 0) + row.revenue;
    return acc;
  }, {});

  const lineData = {
    labels: monthlyRevenue.map(item => item.month),
    datasets: [
      {
        label: 'Monthly Revenue',
        data: monthlyRevenue.map(item => item.revenue),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.4,
      },
    ],
  };

  const productBarData = {
    labels: Object.keys(revenueByProduct),
    datasets: [{
      label: 'Revenue by Product',
      data: Object.values(revenueByProduct),
      backgroundColor: 'rgba(153, 102, 255, 0.6)',
      borderColor: 'rgba(153, 102, 255, 1)',
    }],
  };

  const collegePieData = {
    labels: Object.keys(revenueByCollege),
    datasets: [{
      label: 'Revenue by College',
      data: Object.values(revenueByCollege),
      backgroundColor: Object.keys(revenueByCollege).map(() => `rgba(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, 0.6)`),
    }],
  };

  return (
    <div className="revenue-tracking flex flex-col gap-10 px-20">
      <h2>Revenue Tracking Dashboard</h2>

      <div>
        <h3>Monthly Revenue</h3>
        <Line data={lineData} />
      </div>

      <div>
        <h3>Revenue by Product</h3>
        <Bar data={productBarData} />
      </div>

      <div>
        <h3>Revenue by College</h3>
        <Pie data={collegePieData} />
      </div>

      <div>
        <h3>Monthly Revenue Table</h3>
        <table className="revenue-table">
          <thead>
            <tr>
              <th>Month</th>
              <th>Revenue (₹)</th>
            </tr>
          </thead>
          <tbody>
            {monthlyRevenue.map((row, i) => (
              <tr key={i}>
                <td>{row.month}</td>
                <td>₹ {row.revenue.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RevenueTracking;
