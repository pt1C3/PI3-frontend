import React from 'react';
import { Chart } from 'react-google-charts';

const DoughnutChart = () => {
  const data = [
    ['Task', 'Hours per Day'],
    ['New', 150],
    ['Inactive', 50],
  ];

  const options = {
    title: 'Gestores',
    pieHole: 0.4,
    backgroundColor: 'transparent',
    slices: {
      0: { color: '#FFA139' },  
      1: { color: '#D3D3D3' },  
    },
    legend: {
      position: 'bottom',
      alignment: 'center',
      textStyle: {
        color: '#233238',  
        fontSize: 14
      }
    },
    titleTextStyle: {  
      color: '#233238',  
      fontSize: 18,      
      fontName: 'Metropolis Light'  
    },
  };

  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="300px"
      data={data}
      options={options}
    />
  );
};

export default DoughnutChart;