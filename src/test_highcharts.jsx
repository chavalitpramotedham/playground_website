import React, { useEffect } from 'react';
import "./SocialGraphSection.css";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ChartDemo = () => {
  useEffect(() => {
    // Sample data for the line charts
    const chartData1 = {
        chart: {
            styledMode: true
        },
        categories: ['1', '2', '3', '4','5', '6', '7'],
        series: [{
            name: 'Series 2',
            data: [200, 550, 1050, 600, 1200, 2000, 4000],
            color:{
                linearGradient: [0, 0, 400],
                stops: [
                    [0, '#C8324B'], // first parameter is a fractions, which part of the background this color will take, 0 is start, 1 is end
                    [0.2, '#C8324B'], 
                    [0.4, '#FEC200'],
                    [0.6, '#FEC200'],
                    [0.8, '#05CD41'],
                    [1, '#05CD41'],
                ]
            },
            marker: {
                enabled: false, // Hide data points
              },
            lineWidth: 1.9
        }],
    };

    // Render the line charts
    Highcharts.chart('chart-container-1', {
        chart: {
            type: 'line',
            backgroundColor: '#292929', 
        },
        tooltip: {
            formatter: function() {
                return '<b>'+ this.series.name +'</b><br/>'+
                    this.x +': '+ this.y;
            }
        },
        title: {
            text: 'Project Score',
            style: {
                color: '#FF5B00',      // Text color
                fontSize: '15px',   // Font size
                fontWeight: 'bold',  // Font weight
                fontFamily: 'Arial', // Font family
            },
            align: 'center', // Horizontal alignment
            verticalAlign: 'top', // Vertical alignment
            x: 20, // X position
            y: 10, // Y position
        },
        xAxis: {
            categories: chartData1.categories,
            labels: {
                style: {
                  fontSize: '12px',  // X-axis label font size
                  color: '#FF5B00',  // X-axis label font color
                },
              },
              title: {
                text: 'Date', // X-axis title text
                style: {
                    fontSize: '12px',  // X-axis label font size
                    fontWeight: 'bold', // X-axis title font weight
                    color: '#FF5B00',  // X-axis title font color
                },
              }
        },
        yAxis: {
            gridLineColor: '#FF5B00', // Horizontal grid lines color
            labels: {
                style: {
                  fontSize: '12px',  // Y-axis label font size,
                  color: '#FF5B00',  // Y-axis label font color
                },
              },
              title: {
                text: 'Score', // Y-axis title text
                style: {
                    fontSize: '12px',  // Y-axis label font size
                    fontWeight: 'bold', // Y-axis title font weight
                    color: '#FF5B00',  // Y-axis title font color
                },
              }
        },
        series: chartData1.series,
        credits: {
            enabled: false // Hide the credits
        },
    });

  }, []);
  return (
    <div>
      <div id="chart-container-1" style={{ width: '660px', height: '330px', borderRadius: '10px', maxWidth: '750px'}}></div>
    </div>
  );
};

export default ChartDemo;