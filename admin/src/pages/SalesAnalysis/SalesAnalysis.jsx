import axios from 'axios';
import { CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from 'chart.js';
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import './SalesAnalysis.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SalesAnalysis = () => {
  const [product, setProduct] = useState('');
  const [month, setMonth] = useState('');
  const [college, setCollege] = useState('');
  const [result, setResult] = useState(null);
  const [chartData, setChartData] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/predict', {
        product,
        month,
        college,
      });

      const predictedSales = response.data.predicted_sales;
      const monthlyTrend = response.data.monthly_sales; // Optional: [12 months]

      setChartData({
        labels: Object.keys(monthlyTrend),
        datasets: [
          {
            label: 'Monthly Sales',
            data: Object.values(monthlyTrend),
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.3,
          },
        ],
      });

      setResult({ predictedSales });

    } catch (error) {
      console.error('Error during prediction:', error);
    }
  };

  return (
    <div className="sales-analysis">
      <h2>Sales Analysis from Dataset</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Product Name:</label>
          <input
            type="text"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Month:</label>
          <select value={month} onChange={(e) => setMonth(e.target.value)} required>
            <option value="">Select Month</option>
            {['January', 'February', 'March', 'April', 'May', 'June',
              'July', 'August', 'September', 'October', 'November', 'December'].map(m => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>
        <div>
          <label>College:</label>
          <input
            type="text"
            value={college}
            onChange={(e) => setCollege(e.target.value)}
            required
          />
        </div>
        <button type="submit">Predict Sales</button>
      </form>

      {result && (
        <div className="prediction-result">
          <p>Predicted Sales: {result.predictedSales}</p>
        </div>
      )}

      {chartData && (
        <div className="sales-chart">
          <h3>Monthly Sales Trend</h3>
          <Line data={chartData} />
        </div>
      )}
    </div>
  );
};

export default SalesAnalysis;
