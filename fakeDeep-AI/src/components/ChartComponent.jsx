import "../styles/pieChart.css";
import { useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
// import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5themes_Dark from "@amcharts/amcharts5/themes/Dark";

const PieChart = ({ data }) => {
  useLayoutEffect(() => {

        // Create root element
    let root = am5.Root.new("chartdiv");

        // Set theme
    root.setThemes([am5themes_Dark.new(root)]);
    // remove logo
    root._logo.dispose();

        // Create chart
    let chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        endAngle: 270,
        layout: root.verticalLayout,
        innerRadius: am5.percent(60),
      })
    );
    // series.set("fill", am5.color(0xff0000)); // set Series color to red


     // Create series
    let series = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: "value",
        categoryField: "category",
        endAngle: 270,
        // innerRadius: am5.percent(10)
      })
    );

     // Set series colors
    series.set(
      "colors",
      am5.ColorSet.new(root, {
        colors: data.backgroundColor.map((color) => am5.color(color)),
      })
    );

        // Set data
    series.data.setAll(
      data.labels.map((label, index) => ({
        category: label,
        value: data.data[index],
        color: am5.color(data.backgroundColor[index]),
        
      }))
    );


     // Configure slice appearance
    series.slices.template.setAll({
      // stroke: am5.color("#00020f"),
      // stroke: am5.color("#ffffff"), White stroke to create a gap effect
      strokeWidth: 2, // Width of the stroke
      cornerRadius: 5, // Rounded corners
      shadowColor: am5.color(0x000000),
      shadowBlur: 5,
      shadowOffsetX: 2,
      shadowOffsetY: 2,
      shadowOpacity: 0.5,
    });


     // Adapter to set fill color
    series.slices.template.adapters.add("fill", (fill, target) => {
      return target.dataItem.dataContext.color;
    });


    // remove the text
    const updateLabelsAndTicksVisibility = () => {
      const isSmallScreen = window.innerWidth < 760;
      series.labels.template.set('visible', !isSmallScreen);
      series.ticks.template.set('visible', !isSmallScreen);
  };

  // Set initial visibility
  updateLabelsAndTicksVisibility();

  // Update visibility on resize
  window.addEventListener('resize', updateLabelsAndTicksVisibility);


          // Function to create the legend based on window width
          const createLegend = () => {
            let legend;
      
            // Check window width and adjust legend properties
            if (window.innerWidth > 390) {
              legend = chart.children.push(
                am5.Legend.new(root, {
                  centerX: am5.percent(50),
                  x: am5.percent(50),
                  marginTop: 15,
                  marginBottom: 15,
                })
              );
            } else {
              legend = chart.children.push(
                am5.Legend.new(root, {
                  centerX: am5.percent(50),
                  x: am5.percent(27),
                  marginTop: 15,
                  marginBottom: 15,
                })
              );
            }
      
            // Set legend data
            legend.data.setAll(series.dataItems);
          };
      
          // Initial legend creation
          createLegend();
      
          // Add event listener for window resize to update legend
          const handleResize = () => {
            // Dispose existing legend
            chart.children.each((child) => {
              if (child.isType("Legend")) {
                child.dispose();
              }
            });
      
            // Create new legend based on window size
            createLegend();
          };
      
          window.addEventListener("resize", handleResize);
      
          // Animate series appearance
          series.appear(1000, 100);
      
          // Cleanup
          return () => {
            root.dispose();
            window.removeEventListener("resize", handleResize);
          };
        }, [data]);
      
    

  //     // Function to create the legend based on window width
  //   const createLegend = () => {
  //     let legend;

  //     // Check window width and adjust legend properties
  //     if (window.innerWidth > 500) {
  //       legend = chart.children.push(
  //         am5.Legend.new(root, {
  //           centerX: am5.percent(50),
  //           x: am5.percent(50),
  //           marginTop: 15,
  //           marginBottom: 15,
  //         })
  //       );
  //     } else {
  //       legend = chart.children.push(
  //         am5.Legend.new(root, {
  //           centerX: am5.percent(50),
  //           x: am5.percent(40),
  //           marginTop: 15,
  //           marginBottom: 15,
  //         })
  //       );
  //     }

  //     // Set legend data
  //     legend.data.setAll(series.dataItems);
  //   };

  //   // Initial legend creation
  //   createLegend();

  //   // Add event listener for window resize to update legend
  //   const handleResize = () => {
  //     // Dispose existing legend
  //     chart.children.each((child) => {
  //       if (child.isType("Legend")) {
  //         child.dispose();
  //       }
  //     });

  //     // Create new legend based on window size
  //     createLegend();
  //   };

  //   window.addEventListener("resize", handleResize);

  //   // Animate series appearance
  //   series.appear(1000, 100);

  //   // Cleanup
  //   return () => {
  //     root.dispose();
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, [data]);


  return <div id="chartdiv" style={{ width: "95%", height: "400px" }}></div>;
};

export default PieChart;




























// import { useEffect, useRef } from 'react';
// import Chart from 'chart.js/auto';

// const PieChart = () => {
//   const chartRef = useRef(null);
//   const chartInstanceRef = useRef(null);

//   useEffect(() => {
//     const chartData = {
//       labels: ["BNB LP Pool", "Burned", "LP Pool", "Partnership/CEX Wallet"],
//       data: [30, 30, 35, 5],
//       backgroundColor: ['#7c3aed', '#4f46e5', '#3b82f6', '#8b5cf6'],

//     };

//     const myChart = chartRef.current;

//     if (chartInstanceRef.current) {
//       chartInstanceRef.current.destroy();
//     }

//     chartInstanceRef.current = new Chart(myChart, {
//       type: "doughnut",
//       data: {
//         labels: chartData.labels,
//         datasets: [
//           {
//             label: "Popularity",
//             data: chartData.data,
//             backgroundColor: chartData.backgroundColor,
//             borderColor: chartData.borderColor,
//           },
//         ],
//       },
//       options: {
//         borderWidth: 8,
//         borderRadius: 15,
//         responsive: true,
//         hoverBorderWidth: 0,
//         plugins: {
//           legend: {
//             display: false,
//           },
//         },
//       },
//     });

//     return () => {
//       if (chartInstanceRef.current) {
//         chartInstanceRef.current.destroy();
//       }
//     };
//   }, []);

//   return (
//     <div className="programming-stats">
//       <div className="chart-container">
//         <canvas ref={chartRef} />
//       </div>
//     </div>
//   );
// };

// export default PieChart;

// import { useEffect } from 'react';
// import { Doughnut } from 'react-chartjs-2';
// import '../styles/tokenomics.css';

// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend,
//   plugins,
// } from 'chart.js';

// Register the components
// ChartJS.register(ArcElement, Tooltip, Legend,plugins);

// const data = {
//   labels: ['BNB LP Pool', 'Burned', 'LP Pool', 'Partnership/CEX Wallet'],
//   datasets: [
//     {
//       data: [30, 30, 35, 5],
//       backgroundColor: ['#7c3aed', '#4f46e5', '#3b82f6', '#8b5cf6'],
//       hoverBackgroundColor: ['#6d28d9', '#4338ca', '#2563eb', '#7e22ce'],
//     },
//   ],
// };

// const options = {
//   cutout: '70%',
//   responsive: true,
//   borderWidth:5,
//   borderRadius:2,
//   maintainAspectRatio: false,
//   plugins: {
//     legend: {
//       display: false,
//     },
//   },
// };

// const ChartComponent = () => {
//   let chartInstance = null;

//   useEffect(() => {
//     return () => {
//       if (chartInstance) {
//         chartInstance.destroy();
//       }
//     };
//   }, []);

//   return (
//     <>
//     <div className="tokenomics ">

//       <div className="w-64 h-64">
//         <Doughnut data={data} options={options} ref={(el) => (chartInstance = el?.chartInstance)} />
//       </div>
//       <div className="mt-4 text-white text-sm">
//         <div className="flex items-center">
//           <div className="w-3 h-3 bg-[#7c3aed] mr-2"></div>
//           BNB LP Pool (30%)
//         </div>
//         <div className="flex items-center mt-2">
//           <div className="w-3 h-3 bg-[#4f46e5] mr-2"></div>
//           Burned (30%)
//         </div>
//         <div className="flex items-center mt-2">
//           <div className="w-3 h-3 bg-[#3b82f6] mr-2"></div>
//           LP Pool (35%)
//         </div>
//         <div className="flex items-center mt-2">
//           <div className="w-3 h-3 bg-[#8b5cf6] mr-2"></div>
//           Partnership/CEX Wallet (5%)
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default ChartComponent;
