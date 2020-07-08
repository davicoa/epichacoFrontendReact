/* {
    title: ["Text", "Variable", "Text"],
    subtitle: ["Text", "Variable", "Text"],
    valor: ["Text", "variable", "Text"],
    variable: ["variable", "que buscar"],  
    grafico: ["EjeX", "EjeY"],
    graficoTexto: ["Text", "Variable", "Text"],
  }, */
export default function setOptions(EjeX, EjeY, name) {
  return {
    series: [
      {
        name: name,
        data: EjeY,
      },
    ],
    options: {
      chart: {
        type: "area",
        stacked: false,
        height: 350,
        zoom: {
          type: "x",
          enabled: false,
          autoScaleYaxis: true,
        },
        toolbar: {
          show: false,
        },
      },

      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
      },
      stroke: {
        show: true,
        curve: "smooth",
        lineCap: "butt",
        colors: ["#b2ffa8", "#7eff6e"],
        width: 0.5,
        dashArray: 0,
      },
      fill: {
        type: ["solid", "gradient"],
        colors: ["#b2ffa8", "#7eff6e"],
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100],
        },
      },
      xaxis: {
        categories: EjeX,
        labels: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
    },
  };
}
