import React, { useState, useEffect } from 'react'
import "./style.css"
import ReactApexChart from "react-apexcharts";
import ClipLoader from "react-spinners/ClipLoader";
import logoEscudo from "images/logo_escudo.png";
import upArrow from "images/Up_green_arrow-2.png";
import downArrow from "images/Down_red_arrow-2.png";
import fileJson from "../../fileJson/csvtojson.json"
import logoChaco from "images/ISO_Mesadetrabajo_1.png"

import OptionsGraph from "constant/setOptions"

const DataCard = (props) => {

    const [loading, setLoading] = useState(true)
    const [options, setOptions] = useState()

    const [elValor, setElValor] = useState()
    const [elDato, setElDato] = useState()
    const [laDescr, setLaDescr] = useState()
    const [diff, setDiff] = useState()
    
    const [iconoChaco, setIconoChaco] = useState(false)


    // == componentDidMount
    useEffect(() => {
        if (props.links.length < 20) {

            funcionOp(JSON.parse(JSON.stringify(fileJson)), props.links)
            setLoading(false)

        } else {
            fetch(props.links)
                .then(response => response.json())
                .then((data) => {
                    funcionOp(data, "")
                    setLoading(false)
                })
        }
    }, []);

    const funcionOp = (data, nombre) => {

        let arrayData = []
        let arrayDataFecha = []
        let arrayVarInteranual = []

        let arrayLowerCase = []
        //datos extra para CBA
        let arrayDataHogar2 = []
        let arrayDataHogar3 = []

        data.forEach(elemento => {
            //elemento = toLowerCase(elemento)
            arrayLowerCase.push(toLowerCase(elemento))

        });

        data = arrayLowerCase;
        //caso especial para EURO tipo de dato es "TIPO EURO" y no "TIPO"

        if (data[1]["tipo euro"]) {
            data.forEach(elemento => {
                arrayData.push(elemento.precio.replace(/,/g, "."))
                arrayDataFecha.push(elemento.fecha)

            });

            setElDato("Euro Minorista " + data[1]["tipo euro"])
            setElValor("$ " + arrayData.slice(-1))
            setLaDescr("Valor al " + data[data.length - 1].fecha)
            setDiff(arrayData.slice(-1)[0] - arrayData.slice(-2)[0])

            setOptions(
                OptionsGraph("Precio", arrayData.slice(-10), arrayDataFecha.slice(-10))
            )
        }
        //parte para leer de un json
        else if (nombre !== "") {

            setIconoChaco(true)

            data.forEach(elemento => {
                if (elemento.producto === nombre) {
                    arrayData.push(elemento.toneladas)
                    arrayDataFecha.push(elemento.fecha)
                    arrayVarInteranual.push(elemento["var mens"])
                }
            });

            setElDato(""+ nombre)//data[1]["dat"] = en miles de trabajadores
            setElValor(" " + arrayVarInteranual.slice(-1))
            setLaDescr("Valor del " +arrayDataFecha.slice(-1))

            setDiff(arrayData.slice(-1)[0] - arrayData.slice(-2)[0])

            setOptions(
                OptionsGraph("Cantidad", arrayData.slice(-10), arrayDataFecha.slice(-10), true)
            )

        }
        //Trabajadores Registrados
        else if (data[1]["dat"]) {
            data.forEach(elemento => {
                arrayData.push(elemento.cantidad.replace(/\./g, "").replace(/,/g, "."))
                arrayDataFecha.push(elemento.fecha)
                arrayVarInteranual.push(elemento["variación interanual"])
            });

            setElDato("Trabajadores Registrados (miles)")//data[1]["dat"] = en miles de trabajadores
            setElValor(" " + arrayVarInteranual.slice(-1))
            setLaDescr("Valor del " + data[data.length - 1].fecha)

            setDiff(arrayData.slice(-1)[0] - arrayData.slice(-2)[0])

            setOptions(
                OptionsGraph("Trabajadores", arrayData.slice(-10), arrayDataFecha.slice(-10))
            )

        }
        //Patentamientos de vehiculos
        else if (data[1]["categoria"]) {
            data.forEach(elemento => {
                arrayData.push(elemento.cantidad.replace(/\./g, "").replace(/,/g, '.'))
                arrayDataFecha.push(elemento.fecha)
                arrayVarInteranual.push(elemento["var interanual"])
            });

            setElDato("Patentamientos de vehículos")
            setElValor(arrayVarInteranual.slice(-1))
            setLaDescr("Valor del " + data[data.length - 1].fecha)
            setDiff(arrayVarInteranual.slice(-1))

            setOptions(
                OptionsGraph("Cantidad", arrayData.slice(-10), arrayDataFecha.slice(-10))
            )

        }
        else if (data[1]["canasta"]) {
            let nombre
            data.forEach(elemento => {
                if (elemento.canasta === "CBT") {
                    nombre = "CBT"
                } else {
                    nombre = "CBA"
                }
                arrayData.push(parseFloat(elemento["hogar 1"]))
                arrayDataHogar2.push(parseFloat(elemento["hogar 2"]))
                arrayDataHogar3.push(parseFloat(elemento["hogar 3"]))
                arrayDataFecha.push(elemento.fecha)
                //arrayVarInteranual.push(elemento["Var interanual"])
            });
            setElDato(data[1].tipo + " " + nombre)
            setElValor(arrayData.slice(-1) + " Hogar 1")
            setLaDescr("Valor del " + data[data.length - 1].fecha)
            setDiff(arrayData.slice(-1)[0] - arrayData.slice(-2)[0])

            setOptions(
                {
                    series: [{
                        name: "Hogar 1",
                        data: arrayData.slice(-10)
                    }, {
                        name: 'Hogar 2',
                        data: arrayDataHogar2.slice(-10)
                    }, {
                        name: 'Hogar 3',
                        data: arrayDataHogar3.slice(-10)
                    }],
                    options: {
                        chart: {
                            type: 'area',
                            stacked: false,
                            height: 340,
                            zoom: {
                                type: 'x',
                                enabled: true,
                                autoScaleYaxis: true
                            },
                            toolbar: {
                                show: false
                            }
                        },
                        colors: ['red', 'green', '#545454'],
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
                            colors: undefined,
                            width: 0.5,
                            dashArray: 0,
                        },
                        fill: {
                            type: ['solid', 'gradient'],
                            colors: ['#a4defa', '#12c3ff'],
                            gradient: {
                                shadeIntensity: 1,
                                inverseColors: false,
                                opacityFrom: 0.5,
                                opacityTo: 0,
                                stops: [0, 90, 100]
                            },
                        },
                        xaxis: {
                            categories: arrayDataFecha.slice(-10),
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
            )
        }
        else {
            switch (data[1].tipo) {
                case 'Actividad':
                    data.forEach(elemento => {
                        arrayData.push(elemento.indice.replace(/,/g, "."))
                        arrayDataFecha.push(elemento.fecha)
                        //arrayVarInteranual.push(elemento["var interanual"])
                    });

                    setElDato("Tasa de " + data[1].tipo + " laboral")
                    setElValor(arrayData.slice(-1) + "%")
                    setLaDescr("Valor Trimestrar " + data[data.length - 1].fecha)
                    setDiff(arrayData.slice(-1)[0] - arrayData.slice(-2)[0])

                    setOptions(
                        OptionsGraph("Indice", arrayData.slice(-10), arrayDataFecha.slice(-10))
                    )
                    break;
                case 'IPC Online':
                    data.forEach(elemento => {
                        arrayData.push(elemento.indice.replace(/\./g, "").replace(/,/g, '.'))
                        arrayDataFecha.push(elemento.fecha)
                        //arrayVarInteranual.push(elemento["var interanual"])
                    });

                    setElDato("IPC Bahia Blanca ")
                    setElValor(arrayData.slice(-1) + "%")
                    setLaDescr("Var mensual " + data[data.length - 1].fecha)
                    setDiff(arrayData.slice(-1)[0] - arrayData.slice(-2)[0])

                    setOptions(
                        OptionsGraph("Indice", arrayData.slice(-10), arrayDataFecha.slice(-10))
                    )

                    break;
                case 'Nacional':
                    data.forEach(elemento => {
                        arrayData.push(elemento.indice.replace(/,/g, "."))
                        arrayDataFecha.push(elemento.fecha)
                        arrayVarInteranual.push(elemento["variacion mensual"])
                    });

                    setElDato("Confianza del consumidor " + data[1].tipo)
                    setElValor(arrayVarInteranual.slice(-1))
                    setLaDescr("Var mensual " + data[data.length - 1].fecha)
                    setDiff(arrayData.slice(-1)[0] - arrayData.slice(-2)[0])

                    setOptions(
                        OptionsGraph("Indice", arrayData.slice(-10), arrayDataFecha.slice(-10))
                    )

                    break;
                case 'Venta':
                    data.forEach(elemento => {
                        arrayData.push(elemento.cotizacion.replace(/,/g, "."))
                        arrayDataFecha.push(elemento.fecha)
                    });

                    setElDato("Dolar Minorista " + (props.posicion === 0 ? "Oficial" : "Blu") + " " + data[1].tipo)
                    setElValor("$ " + arrayData.slice(-1))
                    setLaDescr("Valor al " + data[data.length - 1].fecha)

                    setDiff(arrayData.slice(-1)[0] - arrayData.slice(-2)[0])
                    setOptions(
                        OptionsGraph("Cotización", arrayData.slice(-10), arrayDataFecha.slice(-10))
                    )
                    break;
                case 'Producción de leche':
                    data.forEach(elemento => {
                        arrayData.push(elemento.indice.replace(/\./g, "").replace(/,/g, '.'))
                        arrayDataFecha.push(elemento.fecha)
                        //arrayVarInteranual.push(elemento["var interanual"])
                    });

                    setElDato("Indice " + data[1].tipo)
                    setElValor(arrayData.slice(-1) + " Mill lts")
                    setLaDescr("Valor del " + data[data.length - 1].fecha)
                    setDiff(arrayData.slice(-1)[0] - arrayData.slice(-2)[0])

                    setOptions(
                        OptionsGraph("", arrayData.slice(-10), arrayDataFecha.slice(-10))
                    )
                    break;
                case 'Salario mínimo, vital y móvil':
                    data.forEach(elemento => {
                        arrayData.push(elemento.salario.replace(/,/g, "."))
                        arrayDataFecha.push(elemento.fecha)
                    });

                    setElDato("" + data[1].tipo)
                    setElValor("$ " + arrayData.slice(-1))
                    setLaDescr("Valor mensual " + data[data.length - 1].fecha)
                    if (arrayData.slice(-1)[0] - arrayData.slice(-2)[0]) {
                        setDiff(-1)
                    } else {
                        setDiff(1)
                    }

                    setOptions(
                        OptionsGraph("Salario", arrayData.slice(-10), arrayDataFecha.slice(-10))
                    )
                    break;
                case 'Impuestos vinculados al empleo': //seguridad social
                    data.forEach(elemento => {
                        arrayData.push(elemento["total recaudado ($)"].replace(/\./g, "").replace(/,/g, '.'))
                        arrayDataFecha.push(elemento.fecha)
                        arrayVarInteranual.push(elemento["var inteanual"])
                    });

                    setElDato("Seguridad Social ") //Impuestos vinculados al empleo
                    setElValor(arrayVarInteranual.slice(-1))
                    setLaDescr("Var mensual " + data[data.length - 1].fecha)
                    setDiff(arrayData.slice(-1)[0] - arrayData.slice(-2)[0])

                    setOptions(
                        OptionsGraph("Total recaudado", arrayData.slice(-10), arrayDataFecha.slice(-10))
                    )
                    break;
                case 'Ventas en supermercados a precios constantes':
                    data.forEach(elemento => {
                        arrayData.push(elemento["ventas (en millones)"].replace(/\./g, "").replace(/,/g, '.'))
                        arrayDataFecha.push(elemento.fecha)
                        arrayVarInteranual.push(elemento["variación interanual"])
                    });

                    setElDato("Ventas en supermercados a precios constantes")
                    setElValor(arrayVarInteranual.slice(-1))
                    setLaDescr("Var mensual " + data[data.length - 1].fecha)
                    setDiff(arrayData.slice(-1)[0] - arrayData.slice(-2)[0])

                    setOptions(
                        OptionsGraph("Ventas (en millones)", arrayData.slice(-10), arrayDataFecha.slice(-10))
                    )
                    break;
                case 'Producción de hierro primario':
                    data.forEach(elemento => {
                        arrayData.push(elemento["cantidad (en miles de toneladas)"].replace(/\./g, "").replace(/,/g, '.'))
                        arrayDataFecha.push(elemento.fecha)
                        arrayVarInteranual.push(elemento["var interanual"])
                    });
                    setElDato(data[1].tipo)
                    setElValor(arrayVarInteranual.slice(-1))
                    setLaDescr("Valor del " + data[data.length - 1].fecha)
                    setDiff(arrayData.slice(-1)[0] - arrayData.slice(-2)[0])

                    setOptions(
                        OptionsGraph("Miles de toneladas", arrayData.slice(-10), arrayDataFecha.slice(-10))
                    )
                    break;
                case 'EMAE Interanual':
                    data.forEach(elemento => {
                        arrayData.push(elemento.indice.replace(/\./g, "").replace(/,/g, '.'))
                        arrayDataFecha.push(elemento.fecha)
                        //arrayVarInteranual.push(elemento["Var interanual"])
                    });

                    setElDato("Estimador mensual de la actividad económica (EMAE)")
                    setElValor(arrayData.slice(-1) + " %")
                    setLaDescr("Valor del " + data[data.length - 1].fecha)
                    setDiff(arrayData.slice(-1)[0] - arrayData.slice(-2)[0])
                    setOptions(
                        OptionsGraph("Índice", arrayData.slice(-10), arrayDataFecha.slice(-10))
                    )
                    break;
                case 'Pobreza Persona':
                case 'Desocupación abierta':
                    data.forEach(elemento => {
                        arrayData.push(elemento.indice.replace(/,/g, '.'))
                        arrayDataFecha.push(elemento.fecha)
                        //arrayVarInteranual.push(elemento["Var interanual"])
                    });

                    setElDato("Tasa de desocupación")
                    setElValor(arrayData.slice(-1) + " %")
                    setLaDescr("Valor trimestral " + data[data.length - 1].fecha)
                    setDiff(arrayData.slice(-1)[0] - arrayData.slice(-2)[0])
                    setOptions(
                        OptionsGraph("Índice", arrayData.slice(-10), arrayDataFecha.slice(-10))
                    )
                    break;
                case 'PBI':
                    data.forEach(elemento => {
                        arrayData.push(elemento.indice.replace(/\./g, "").replace(/,/g, '.'))
                        arrayDataFecha.push(elemento.fecha)
                        //arrayVarInteranual.push(elemento["Var interanual"])
                    });

                    setElDato("Producto bruto interno (" + data[1].tipo + ")")
                    setElValor(arrayData.slice(-1) + " %")
                    setLaDescr("Valor del " + data[data.length - 1].fecha)
                    setDiff(arrayData.slice(-1)[0] - arrayData.slice(-2)[0])
                    setOptions(
                        OptionsGraph("Índice", arrayData.slice(-10), arrayDataFecha.slice(-10))
                    )
                    break;
                case 'Índice de producción industrial':
                case 'IPC':
                    data.forEach(elemento => {
                        arrayData.push(elemento.indice.replace(/\./g, "").replace(/,/g, '.'))
                        arrayDataFecha.push(elemento.fecha)
                        //arrayVarInteranual.push(elemento["Var interanual"])
                    });

                    setElDato("Inflación (" + data[1].tipo + ")")
                    setElValor(arrayData.slice(-1) + " %")
                    setLaDescr("Valor del " + data[data.length - 1].fecha)
                    setDiff(arrayData.slice(-1)[0] - arrayData.slice(-2)[0])
                    setOptions(
                        OptionsGraph("Índice", arrayData.slice(-10), arrayDataFecha.slice(-10))
                    )
                    break;
                case 'IPIM':
                    data.forEach(elemento => {
                        arrayData.push(elemento.cantidad.replace(/\./g, "").replace(/,/g, '.'))
                        arrayDataFecha.push(elemento.fecha)
                        //arrayVarInteranual.push(elemento["Var interanual"])
                    });

                    setElDato("Inflación mayorista (" + data[1].tipo + ")")
                    setElValor(arrayData.slice(-1) + " %")
                    setLaDescr("Valor del " + data[data.length - 1].fecha)
                    setDiff(arrayData.slice(-1)[0] - arrayData.slice(-2)[0])
                    setOptions(
                        OptionsGraph("Índice", arrayData.slice(-10), arrayDataFecha.slice(-10))
                    )
                    break;
                case 'UCII':
                    data.forEach(elemento => {
                        arrayData.push(elemento.cantidad.replace(/\./g, "").replace(/,/g, '.'))
                        arrayDataFecha.push(elemento.fecha)
                        //arrayVarInteranual.push(elemento["Var interanual"])
                    });

                    setElDato("Capacidad instalada de la industria (" + data[1].tipo + ")")
                    setElValor(arrayData.slice(-1) + " %")
                    setLaDescr("Valor del " + data[data.length - 1].fecha)
                    setDiff(arrayData.slice(-1)[0] - arrayData.slice(-2)[0])
                    setOptions(
                        OptionsGraph("Índice", arrayData.slice(-10), arrayDataFecha.slice(-10))
                    )
                    break;
                case 'UVA':
                    data.forEach(elemento => {
                        arrayData.push(elemento.cantidad.replace(/\./g, "").replace(/,/g, '.'))
                        arrayDataFecha.push(elemento.fecha)
                        //arrayVarInteranual.push(elemento["Var interanual"])
                    });

                    setElDato("Valor " + data[1].tipo)
                    setElValor("$ " + arrayData.slice(-1))
                    setLaDescr("Valor del " + data[data.length - 1].fecha)
                    setDiff(arrayData.slice(-1)[0] - arrayData.slice(-2)[0])
                    setOptions(
                        OptionsGraph("Índice", arrayData.slice(-10), arrayDataFecha.slice(-10))
                    )
                    break;
                case 'Deuda externa':
                    data.forEach(elemento => {
                        arrayData.push(parseFloat(elemento.indice))
                        arrayDataFecha.push(elemento.fecha)
                        //arrayVarInteranual.push(elemento["Var interanual"])
                    });

                    setElDato(data[1].tipo)
                    setElValor(arrayData.slice(-1))
                    setLaDescr("Valor del " + data[data.length - 1].fecha)
                    if (arrayData.slice(-1)[0] - arrayData.slice(-2)[0]) {
                        setDiff(-1)
                    } else {
                        setDiff(1)
                    }
                    setOptions(
                        OptionsGraph("$", arrayData.slice(-10), arrayDataFecha.slice(-10))
                    )
                    break;
                case 'IPC NUCLEO':
                case 'ISAC'://Indicador sintético de la construcción
                    data.forEach(elemento => {
                        arrayData.push(elemento.indice.replace(/\./g, "").replace(/,/g, '.'))
                        arrayDataFecha.push(elemento.fecha)
                        //arrayVarInteranual.push(elemento["Var interanual"])
                    });

                    setElDato("Indicador sintético de la construcción (" + data[1].tipo + ")")
                    setElValor(arrayData.slice(-1) + " %")
                    setLaDescr("Valor del " + data[data.length - 1].fecha)
                    setDiff(arrayData.slice(-1)[0] - arrayData.slice(-2)[0])
                    setOptions(
                        OptionsGraph("Índice", arrayData.slice(-10), arrayDataFecha.slice(-10))
                    )
                    break;
                case 'Indigencia Persona':
                    data.forEach(elemento => {
                        arrayData.push(parseFloat(elemento.indice))
                        arrayDataFecha.push(elemento.fecha)
                        //arrayVarInteranual.push(elemento["Var interanual"])
                    });

                    setElDato(data[1].tipo)
                    setElValor(arrayData.slice(-1) + " %")
                    setLaDescr("Valor del " + data[data.length - 1].fecha)
                    setDiff(arrayData.slice(-1)[0] - arrayData.slice(-2)[0])
                    setOptions(
                        OptionsGraph("Índice", arrayData.slice(-10), arrayDataFecha.slice(-10))
                    )
                    break;
                case 'Empleo':
                    data.forEach(elemento => {
                        arrayData.push(elemento.indice.replace(/\./g, "").replace(/,/g, '.'))
                        arrayDataFecha.push(elemento.fecha)
                        //arrayVarInteranual.push(elemento["Var interanual"])
                    });

                    setElDato(data[1].tipo)
                    setElValor(arrayData.slice(-1) + "%")
                    setLaDescr("Valor del " + data[data.length - 1].fecha)
                    setDiff(arrayData.slice(-1)[0] - arrayData.slice(-2)[0])

                    if (arrayData.slice(-1)[0] - arrayData.slice(-2)[0]) {
                        setDiff(-1)
                    } else {
                        setDiff(1)
                    }
                    setOptions(
                        OptionsGraph("Índice", arrayData.slice(-10), arrayDataFecha.slice(-10))
                    )
                    break;
                case 'Faena':
                    data.forEach(elemento => {
                        arrayData.push(parseFloat(elemento.cantidad))
                        arrayDataFecha.push(elemento.fecha)
                        arrayVarInteranual.push(elemento["var interanual"])
                    });

                    setElDato(data[1].tipo + " (en cabezas)")
                    setElValor(arrayData.slice(-1))
                    setLaDescr("Valor del " + data[data.length - 1].fecha)
                    setDiff(arrayData.slice(-1)[0] - arrayData.slice(-2)[0])

                    setOptions(
                        OptionsGraph("Cantidad", arrayData.slice(-10), arrayDataFecha.slice(-10))
                    )
                    break;
                case 'Molienda de Soja - Harina':
                    data.forEach(elemento => {
                        arrayData.push(parseFloat(elemento.cantidad))
                        arrayDataFecha.push(elemento.fecha)
                        arrayVarInteranual.push(elemento["var interanual"])
                    });

                    setElDato(data[1].tipo)
                    setElValor(arrayData.slice(-1))
                    setLaDescr("Valor del " + data[data.length - 1].fecha)
                    setDiff(arrayData.slice(-1)[0] - arrayData.slice(-2)[0])

                    setOptions(
                        OptionsGraph("Cantidad", arrayData.slice(-10), arrayDataFecha.slice(-10))
                    )
                    break;
                case 'Saldo comercial':
                    data.forEach(elemento => {
                        arrayData.push(elemento["millones de dólares"].replace(/\./g, "").replace(/,/g, '.'))
                        arrayDataFecha.push(elemento.fecha)
                    });
                    setElDato(data[1].tipo)
                    setElValor("US$" + arrayData.slice(-1))
                    setLaDescr("Valor del " + data[data.length - 1].fecha)
                    setDiff(arrayData.slice(-1)[0] - arrayData.slice(-2)[0])

                    setOptions(
                        OptionsGraph("Millones de dólares", arrayData.slice(-10), arrayDataFecha.slice(-10))
                    )
                    break;
                case 'Importaciones':
                case 'Exportaciones':
                    //Exportaciones de vehiculos por que traer "producción" en ves de "millones de dólares"
                    let titulo
                    let subDato
                    //
                    data.forEach(elemento => {
                        if (elemento["millones de dólares"]) {
                            arrayData.push(elemento["millones de dólares"].replace(/\./g, "").replace(/,/g, '.'))
                            arrayDataFecha.push(elemento.fecha)
                            arrayVarInteranual.push(elemento["variación interanual"])
                            titulo = data[1].tipo
                            subDato = "Millones de dólares"
                        } else {
                            arrayData.push(elemento.producción.replace(/\./g, "").replace(/,/g, '.'))
                            arrayDataFecha.push(elemento.fecha)
                            arrayVarInteranual.push(elemento["var interanual"])
                            titulo = "Exportaciones de vehiculos"
                            subDato = "Producción"
                        }
                    });
                    setElDato(titulo)
                    setElValor(arrayVarInteranual.slice(-1))
                    setLaDescr("Valor del " + data[data.length - 1].fecha)

                    setDiff(arrayVarInteranual.slice(-1))

                    setOptions(
                        OptionsGraph(subDato, arrayData.slice(-10), arrayDataFecha.slice(-10))
                    )
                    break;
                case 'Recaudación Tributaria':
                    data.forEach(elemento => {
                        arrayData.push(elemento["millones de pesos"].replace(/\./g, "").replace(/,/g, '.'))
                        arrayDataFecha.push(elemento.fecha)
                        arrayVarInteranual.push(elemento["variación interanual"])
                    });

                    setElDato(data[1].tipo)
                    setElValor(arrayVarInteranual.slice(-1))
                    setLaDescr("Valor del " + data[data.length - 1].fecha)
                    setDiff(arrayData.slice(-1)[0] - arrayData.slice(-2)[0])

                    setOptions(
                        OptionsGraph("Mill de pesos", arrayData.slice(-10), arrayDataFecha.slice(-10))
                    )
                    break;
                case 'Automóviles':
                    data.forEach(elemento => {
                        arrayData.push(elemento.producción.replace(/\./g, "").replace(/,/g, '.'))
                        arrayDataFecha.push(elemento.fecha)
                        arrayVarInteranual.push(elemento["variación interanual"])
                    });

                    setElDato("Producción de " + data[1].tipo)
                    setElValor(arrayVarInteranual.slice(-1))
                    setLaDescr("Valor del " + data[data.length - 1].fecha)
                    setDiff(arrayVarInteranual.slice(-1))

                    setOptions(
                        OptionsGraph("Producción", arrayData.slice(-10), arrayDataFecha.slice(-10))
                    )
                    break;
                default:
                    data.forEach(elemento => {
                        arrayData.push(parseFloat(elemento.cantidad))
                        arrayDataFecha.push(elemento.fecha)
                        arrayVarInteranual.push(elemento["var interanual"])
                    });
                    if (data[1].tipo === "Laminados no planos en caliente (en miles de toneladas)") {
                        setElDato("Laminados no planos en caliente miles de t")
                    } else {
                        setElDato(data[1].tipo)
                    }
                    setElValor(arrayData.slice(-1))
                    setLaDescr("Valor del " + data[data.length - 1].fecha)
                    setDiff(arrayData.slice(-1)[0] - arrayData.slice(-2)[0])

                    setOptions(
                        OptionsGraph("Cantidad", arrayData.slice(-10), arrayDataFecha.slice(-10))
                    )
            }
        }
    }

    return (
        <div className="cardContainer">
            {
                loading ?
                    <div className="centarClip">
                        <ClipLoader
                            css={"display: block", "margin: 0 auto", "border-color: blue"}
                            size={150}
                            color={"#123abc"}
                            loading={loading}
                        />
                    </div>
                    :
                    <div className="apexContainer">
                        <div className="headerGraphContainer">
                            <div className="headerGraph">
                                <div className="headerGraph2">
                                    <span>{elDato}</span>
                                </div>
                                <div className="headerGraph3">
                                    <img className="headerGraphicon" src={iconoChaco?logoChaco:logoEscudo} alt="Escudo"></img>
                                </div>
                                <br />
                            </div>
                            <div className="headerData">
                                <div className="spanDescripcion">
                                    <span style={{ fontSize: "x-small", float: "left", fontWeight: 'bold', marginLeft: "5%" }}>{laDescr}</span><br />
                                </div>
                                <div style={{ textAlign: 'left', fontWeight: 'bold', marginLeft: "3%", fontSize: "large", color: increase(diff) }}>
                                    {increaseIMG(diff, elValor)}
                                    <span style={{ marginLeft: "2%", fontSize: "1.5em" }}>{elValor}</span>
                                </div>
                            </div>
                        </div>
                        <div className="apexGraph">
                            <ReactApexChart
                                options={options.options}
                                series={options.series}
                                type="area"
                            />
                        </div>
                        <span className="style-kbazlqv8label" style={{ marginBottom: "-10%", display: 'none'/* ocultar boton */ }}>
                            EXPANDIR
                        </span>
                    </div>
            }
        </div>
    )
}

// Hay jsons con keys "Tipo" (con "T" mayúscula) y "tipo", las paso a todas a lowercase para hacer un switch por tipo

function toLowerCase(obj) {
    var key, keys = Object.keys(obj);
    var n = keys.length;
    var newobj = {}
    while (n--) {
        key = keys[n];
        newobj[key.toLowerCase()] = obj[key];
    }
    return newobj;
}

function increase(diff) {
    if (parseFloat(diff) > 0) {
        return "#3bb54c"
    } else if (parseFloat(diff) < 0) {
        return "red"
    } else {
        return "#5F5F5F"
    }
}
function increaseIMG(numero, elValor) {
    if (parseFloat(numero) > 0) {
        if (parseFloat(elValor) > 0) {
            return (<img style={{ color: "#3bb54c" }} src={upArrow} alt="" height="auto" width="7%"></img>)
        } else {
            return (<img style={{ color: "#red" }} src={upArrow} alt="" height="auto" width="7%"></img>)
        }
    } else if (parseFloat(numero) < 0) {
        if (parseFloat(elValor) < 0) {
            return (<img style={{ color: "#3bb54c" }} src={downArrow} alt="" height="auto" width="7%"></img>)
        } else {
            return (<img style={{ color: "#red" }} src={downArrow} alt="" height="auto" width="7%"></img>)
        }
    } else {
        return ""
    }
}

export default DataCard