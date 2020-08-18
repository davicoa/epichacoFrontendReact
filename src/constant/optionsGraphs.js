export default function setOptions(EjeX, EjeY, name, color = false, decimalPrecision) {
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
        colors: color ? ["#a4defa", "#12c3ff"] : ["#b2ffa8", "#7eff6e"],
        width: 0.5,
        dashArray: 0,
      },
      fill: {
        type: ["solid", "gradient"],
        colors: color ? ["#a4defa", "#12c3ff"] : ["#b2ffa8", "#7eff6e"],
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
        tooltip: {
          enabled: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      tooltip: {
        enabled: true,
        marker: {
          show: false,
        },
        y: [
          {
            formatter: function (y) {
              return (
                parseFloat(y.toString())
                  .toLocaleString('de-DE', { maximumFractionDigits: decimalPrecision, minimumFractionDigits: decimalPrecision })
              )
            },
          },
        ],
      },
    },
  };
}
