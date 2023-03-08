import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend ,BarElement, CategoryScale, LinearScale, Title} from "chart.js";
import { Bar } from 'react-chartjs-2';
import faker from 'faker';


ChartJS.register(BarElement);
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
        position: 'top' ,
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  
  const labels = ['odc', "orange lab","orange fab"];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: '#000',
      },
    ],
  };
function BarChart() {
    
  return (
    <Bar height={100} data={data} options={options}>
      
    </Bar>
  )
}

export default BarChart
