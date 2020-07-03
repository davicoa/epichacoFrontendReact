
export default function setOptions(name, data, categories, color=false) {

    return {
        series: [{
            name: name,
            data: data
        }],
        options: {
            chart: {
                type: 'area',
                stacked: false,
                height: 350,
                zoom: {
                    type: 'x',
                    enabled: false,
                    autoScaleYaxis: true
                },
                toolbar: {
                    show: false
                }
            },

            dataLabels: {
                enabled: false
            },
            markers: {
                size: 0,
            },
            stroke: {
                show: true,
                curve: 'smooth',
                lineCap: 'butt',
                colors: color?['#b2ffa8', '#7eff6e']:['#a4defa', '#12c3ff'],
                width: 0.5,
                dashArray: 0,
            },
            fill: {
                type: ['solid', 'gradient'],
                colors: color?['#b2ffa8', '#7eff6e']:['#a4defa', '#12c3ff'],
                gradient: {
                    shadeIntensity: 1,
                    inverseColors: false,
                    opacityFrom: 0.5,
                    opacityTo: 0,
                    stops: [0, 90, 100]
                },
            },
            xaxis: {
                categories: categories,
                labels: {
                    show: false
                }
            },
            yaxis: {
                labels: {
                    show: false
                }
            }
        }
    }
}