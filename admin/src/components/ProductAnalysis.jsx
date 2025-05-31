import React, { useState, useEffect } from 'react';
import * as Papa from 'papaparse';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ProductAnalysis = () => {
  const [data, setData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [productList, setProductList] = useState([]);
  const [collegeData, setCollegeData] = useState({});

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
            'Product': row['Product'],
            'College': row['College'],
            'Units Sold': parseInt(row['Units Sold']) || 0,
          }));
          setData(parsedData);

          // Extract unique product list
          const products = [...new Set(parsedData.map(row => row['Product']))];
          setProductList(products);

          // Set default selected product
          if (products.length > 0) {
            setSelectedProduct(products[0]);
          }
        }
      });
    };

    fetchCSV();
  }, []);

  useEffect(() => {
    if (selectedProduct && data.length) {
      const filtered = data.filter(row => row['Product'] === selectedProduct);
      const collegeMap = {};

      filtered.forEach(row => {
        const college = row['College'];
        const units = row['Units Sold'];
        collegeMap[college] = (collegeMap[college] || 0) + units;
      });

      setCollegeData(collegeMap);
    }
  }, [selectedProduct, data]);

  const chartData = {
    labels: Object.keys(collegeData),
    datasets: [
      {
        label: 'Units Sold',
        data: Object.values(collegeData),
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0',
          '#9966FF', '#FF9F40', '#8BC34A', '#00BCD4'
        ],
      },
    ],
  };

  return (
    <div className="product-analysis px-10">
      <h2>Product Analysis</h2>

      <div className="mb-4">
        <label htmlFor="productSelect">Select Product:</label>
        <select
          id="productSelect"
          value={selectedProduct}
          onChange={e => setSelectedProduct(e.target.value)}
          className="ml-2 p-1 border rounded"
        >
          {productList.map((product, index) => (
            <option key={index} value={product}>{product}</option>
          ))}
        </select>
      </div>

      <div className="w-[400px] max-w-full">
        <h3>Units Sold by College</h3>
        <Pie data={chartData} />
      </div>
    </div>
  );
};

export default ProductAnalysis;
