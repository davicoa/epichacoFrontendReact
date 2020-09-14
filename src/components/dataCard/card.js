import React, { useState, useEffect } from "react";
import "./style.css";
import ReactApexChart from "react-apexcharts";
import ClipLoader from "react-spinners/ClipLoader";
import moment from 'moment';

import logoChaco from "images/logo_chaco.png";
import logoEscudo from "images/logo_escudo.png";
import OptionsGraph from "constant/optionsGraphs";
import ApiGraphsDataService from "services/ApiGraphsDataService";

import upGreenArrow from "images/arrowUpGreen.png";
import upRedArrow from "images/arrowUpRed.png";
import downGreenArrow from "images/arrowDownGreen.png";
import downRedArrow from "images/arrowDownRed.png";

import arrowDownGray from "images/arrowDownGray.png"
import arrowUpGray from "images/arrowUpGray.png"

const Card = (props) => {
  const [loading, setLoading] = useState(true);
  const [options, setOptions] = useState();
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [valueView, setValueView] = useState("");
  const [arrowAndColor, setArrowAndColor] = useState("");

  const [arrowColor, setArrowColor] = useState("");

  const { dirOpuesta, varIntAnual } = props.dataGraph.arrow;
  const { maximumFractionDigits, minimumFractionDigits } = props.dataGraph.decimalPrecision;

  useEffect(() => {
    dataFromApi();
  }, []);

  const dataFromApi = async () => {
    let EjeX = [];
    let EjeY = [];
    let nametitle = "";
    let namesubtitle = "";
    let valor = [];
    let { ejey, ejex } = props.dataGraph.grafico;
    let { campotitle, antestitle, despuestitle } = props.dataGraph.title;
    let {
      antessubtitle,
      camposubtitle,
      fechaSubtitle,
    } = props.dataGraph.subtitle;
    let { campovalor } = props.dataGraph.valor;
    let { dondebuscar, quebuscar } = props.dataGraph.variable;
    let { dondebuscarOpc, quebuscarOpc } = props.dataGraph.variableOpc;

    const rawData = await ApiGraphsDataService.getDataGraph(
      props.dataGraph.link
    );

    rawData.data.sort((a, b) => new Date(a.fecha) > new Date(b.fecha))

    rawData.data.forEach((item) => {
      if (dondebuscarOpc === "" && dondebuscar !== "") {
        if (
          quebuscar === "" ||
          item[dondebuscar].toLowerCase() === quebuscar.toLowerCase()
        ) {
          if (item[ejey] !== null) {
            EjeX.push(item[ejex]);
            EjeY.push(
              parseFloat(
                item[ejey]
                  .replace(/[&/\\#+()$~%'":*?<>{}.]/g, "")
                  .replace(/,/g, ".")
              )
            ); //dato
            if (item[campotitle]) {
              nametitle = item[campotitle];
            }
            if (item[camposubtitle]) {
              namesubtitle = item[camposubtitle];
            }

            if (item[campovalor]) {
              valor.push(
                parseFloat(
                  item[campovalor]
                    .replace(/[&/\\#+()$~%'":*?<>{}.]/g, "")
                    .replace(/,/g, "."))
                  .toLocaleString('de-DE', { maximumFractionDigits: maximumFractionDigits, minimumFractionDigits: minimumFractionDigits })
              ); // valor mostrado
            }
          }
        }
      } else if (
        item[dondebuscar].toLowerCase() === quebuscar.toLowerCase() &&
        item[dondebuscarOpc].toLowerCase() === quebuscarOpc.toLowerCase()
      ) {
        if (item[ejey] !== null) {
          EjeX.push(item[ejex]);
          EjeY.push(
            parseFloat(
              item[ejey]
                .replace(/[&/\\#+()$~%'":*?<>{}.]/g, "")
                .replace(/,/g, ".")
            )
          ); //dato
          if (item[campotitle]) {
            nametitle = item[campotitle];
          }
          if (item[camposubtitle]) {
            namesubtitle = item[camposubtitle];
          }
          if (item[campovalor]) {
            valor.push(
              parseFloat(item[campovalor]
                .replace(/[&/\\#+()$~%'":*?<>{}.]/g, "")
                .replace(/,/g, "."))
                .toLocaleString('de-DE', { maximumFractionDigits: maximumFractionDigits, minimumFractionDigits: minimumFractionDigits })
            ); // valor mostrado
          }
        }
      }
    });

    //   Arrow
    let dirflecha = 0
    let arrowColor2 = 0
    let index = EjeY.length - 2
    if (varIntAnual) {
      index = EjeX.findIndex(element => moment(element, 'DD/MM/YYYY').format("MM/YYYY") === moment(EjeX.slice(-1), 'DD/MM/YYYY').subtract(1, 'years').format("MM/YYYY"))
      if (index === -1) {
        index = EjeY.length - 2
      }
    }
    if (EjeY[index] < 0) {
      if (EjeY[index] > EjeY[EjeY.length - 1]) {
        setArrowAndColor(1)
        dirflecha = 1;
        setArrowColor(EjeY[EjeY.length - 1])
        arrowColor2 = EjeY[EjeY.length - 1]
      } else {
        setArrowAndColor(-1)
        dirflecha = -1;
        setArrowColor(EjeY[EjeY.length - 1])
        arrowColor2 = EjeY[EjeY.length - 1]
      }
    } else if (EjeY[index] < 0) {
      if (EjeY[index] < EjeY[EjeY.length - 1]) {
        setArrowAndColor(1)
        dirflecha = 1;
        setArrowColor(EjeY[EjeY.length - 1])
        arrowColor2 = EjeY[EjeY.length - 1]
      } else {
        setArrowAndColor(-1)
        dirflecha = -1;
        setArrowColor(EjeY[EjeY.length - 1])
        arrowColor2 = EjeY[EjeY.length - 1]
      }
    } else {
      setArrowAndColor(Math.abs(EjeY.slice(-2)[0]) - Math.abs(EjeY.slice(-1)[0]));
      dirflecha = Math.abs(EjeY.slice(-2)[0]) - Math.abs(EjeY.slice(-1)[0]);
      setArrowColor(EjeY[EjeY.length - 1])
      arrowColor2 = EjeY[EjeY.length - 1]
    }

    // carousel
    props.cargarSliderHandler({
      titulo: antestitle + " " + nametitle + " " + despuestitle,
      valor: props.dataGraph.valor.antesvalor + " " + valor.slice(-1) + " " + props.dataGraph.valor.despuesvalor,
      dirOpuesta: dirOpuesta,
      arrowAndColor: dirflecha.toFixed(2),
      nacion: props.dataGraph.nacion,
      arrowColor: arrowColor2
    })

    //tittle
    setTitle(antestitle + " " + nametitle + " " + despuestitle);
    //subtitle

    setSubtitle(
      antessubtitle +
      " " +
      namesubtitle +
      " " +
      (fechaSubtitle ?
        moment(EjeX.slice(-1), 'DD/MM/YYYY').format(props.dataGraph.dateFormart.subtitle)
        : '')
    );
    //valor
    setValueView(
      props.dataGraph.valor.antesvalor +
      " " +
      valor.slice(-1)
      +
      " " +
      props.dataGraph.valor.despuesvalor
    );
    //grafico
    setOptions(
      OptionsGraph(
        EjeX.slice(-10).map((date) => {
          return moment(date, 'DD/MM/YYYY').format(props.dataGraph.dateFormart.graph)
        }),
        EjeY.slice(-10),
        props.dataGraph.graficoTexto,
        props.dataGraph.nacion,
        props.dataGraph.decimalPrecision
      )
    );
    setLoading(false);
  };

  return (
    <div className="cardContainer">
      {loading ? (
        <div className="centarClip">
          <ClipLoader
            css={("display: block", "margin: 0 auto", "border-color: blue")}
            size={150}
            color={"#123abc"}
            loading={loading}
          />
        </div>
      ) : (
          <div className="apexContainer">
            <div className="headerGraphContainer">
              <div className="headerGraph">
                <div className="headerGraph2">
                  <span>{title}</span>
                </div>
                <div className="headerGraph3">
                  <img
                    className="headerGraphicon"
                    src={props.dataGraph.nacion ? logoEscudo : logoChaco}
                    alt="Escudo"
                    height={props.dataGraph.nacion ? "115%" : "90%"}
                    width={props.dataGraph.nacion ? "auto" : "auto"}
                  ></img>
                </div>
                <br />
              </div>
              <div className="headerData">
                <div className="spanDescripcion">
                  <span
                    style={{
                      fontSize: "x-small",
                      float: "left",
                      fontWeight: "bold",
                      marginLeft: "5%",
                    }}
                  >
                    {subtitle}
                  </span>
                  <br />
                </div>
                <div
                  style={{
                    textAlign: "left",
                    fontWeight: "bold",
                    marginLeft: "3%",
                    fontSize: "large",
                    color: "red",
                  }}
                >
                  <span style={{ marginLeft: "2%", fontSize: "1.5em" }}>
                    <img
                      src={
                        dirOpuesta !== null ?
                          dirOpuesta ?
                            arrowAndColor > 0 ? //flecha abajo
                              arrowColor > 0 ? downRedArrow : downGreenArrow :
                              arrowAndColor < 0 ? //flecha arriba
                                arrowColor > 0 ? upRedArrow : upGreenArrow
                                : ""
                            :
                            arrowAndColor < 0 ? //flecha abajo
                              arrowColor < 0 ? downRedArrow : downGreenArrow :
                              arrowAndColor > 0 ? //flecha arriba
                                arrowColor < 0 ? upRedArrow : upGreenArrow
                                : ""
                          : arrowColor < 0 ? arrowDownGray : arrowUpGray
                      }
                      alt=""
                      height="auto"
                      width="7%"
                    ></img>
                    <span
                      style={{
                        color:
                          dirOpuesta !== null ?
                            dirOpuesta ? arrowColor < 0 ? "#3bb54c" : "red" : arrowColor > 0 ? "#3bb54c" : "red"
                            : "#5F5F5F"
                      }}
                    >
                      {valueView}
                    </span>
                  </span>
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
            <span
              className="style-kbazlqv8label"
              style={{
                marginBottom: "-10%",
                display: "none" /* ocultar boton */,
              }}
            >
              EXPANDIR
          </span>
          </div>
        )}
    </div>
  );
};

export default Card;
