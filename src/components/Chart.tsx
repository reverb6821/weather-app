import Chart from 'react-apexcharts';
import { useAppSelector } from '../models/action';
import { convertedLocalDate } from '../utils/convertedLocalDate';


const ChartBox = () => {
    const weatherTemp = useAppSelector(state => state.weather.weatherOnHours!.temp);
    const hours = useAppSelector(state => state.weather.weatherOnHours!.date).map(hour =>
      convertedLocalDate(hour, true),
    );
    // console.log(hours);
    const data: any = {
      series: [
        {
          name: 'T °C',
          data: weatherTemp,
        },
      ],
      options: {
        chart: {
          type: 'area',
          height: 'auto',
          parentHeightOffset: 0,
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        fill: {
          colors: ['#1563d4'],
          type: 'gradient',
        },
  
        dataLabels: {
          enabled: true,
          textAnchor: 'middle',
          offsetY: -5,
          style: {
            fontSize: '12px',
            colors: ['#fff', '#fff'],
          },
          background: {
            enabled: false,
          },
        },
        stroke: {
          curve: 'smooth',
          colors: ['#1563d4'],
          width: 2,
        },
  
        legend: {
          show: false,
        },
        grid: {
          show: false,
        },
        tooltip: {
          x: {
            show: false,
          },
  
          fixed: {
            enabled: true,
          },
        },
        xaxis: {
          type: 'numeric ',
          categories: hours,
          crosshairs: {
            show: false,
          },
          tooltip: {
            enabled: false,
          },
        },
        yaxis: {
          show: true,
          max: (weatherTemp: number) => {
            return weatherTemp + 5;
          },
          min: (weatherTemp: number) => {
            return weatherTemp - 1;
          },
          labels: {
            offsetX: -10,
            color: "#fff"
          },
        },
      },
    };
    return (
      <div className='box-border rounded-md p-5 bg-slate-800 '>
        <h3 className='text-slate-200'>Temperature °C</h3>
        <Chart options={data.options} series={data.series} type='area' height={350} />
      </div>
    );
  };
  
  export default ChartBox;