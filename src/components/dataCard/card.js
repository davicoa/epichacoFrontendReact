import React, { useState, useEffect } from "react";
import "./style.css";
import ReactApexChart from "react-apexcharts";
import ClipLoader from "react-spinners/ClipLoader";
import logoChaco from "images/ISO_Mesadetrabajo_1.png"
import logoEscudo from "images/logo_escudo.png";
import OptionsGraph from "constant/optionsGraphs";
import ApiGraphsDataService from "services/ApiGraphsDataService";
import upArrow from "images/Up_green_arrow-2.png";
import downArrow from "images/Down_red_arrow-2.png";

const Card = (props) => {
  const [loading, setLoading] = useState(true);
  const [options, setOptions] = useState();
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [valueView, setValueView] = useState("");
  const [arrowAndColor, setArrowAndColor] = useState("");

  useEffect(() => {
    dataFromApi();
  }, []);

  const dataFromApi = async () => {
    let EjeX = [];
    let EjeY = [];
    let name = "";
    let valor = [];
    const rawData = await ApiGraphsDataService.getDataGraph(
      props.dataGraph.link
    );

    rawData.data.forEach((item) => {
      try {
        if (
          item[props.dataGraph.variable.dondebuscar].toLowerCase() === props.dataGraph.variable.quebuscar.toLowerCase() ||
          (props.dataGraph.variable.quebuscar === "" &&
            item[props.dataGraph.variable.dondebuscar] !== "")
        ) {
          if ((item[props.dataGraph.grafico.ejey] !== null)) {
            EjeX.push(item[props.dataGraph.grafico.ejex]) //fecha
            EjeY.push(parseFloat(item[props.dataGraph.grafico.ejey].replace(/,/g, ".").replace(/[&/\\#+()$~%'":*?<>{}]/g, ''))) //dato
            if (item[props.dataGraph.title.campotitle]) {
              name = item[props.dataGraph.title.campotitle];
            }
            if (item[props.dataGraph.valor.campovalor]) {
              valor.push(parseFloat(item[props.dataGraph.valor.campovalor].replace(/,/g, ".").replace(/[&/\\#+()$~%'":*?<>{}]/g, ''))) // valor mostrado
            }
          }

        }
      } catch (error) {
        console.log(error);
      }
    });
    //Arrow
    setArrowAndColor(
      (Math.abs(EjeY.slice(-2)[0]) - Math.abs(EjeY.slice(-1)[0]))
    )
    //tittle
    setTitle(
      props.dataGraph.title.antestitle + " " + name + " " + props.dataGraph.title.despuestitle
    );
    //subtitle
    setSubtitle(
      props.dataGraph.subtitle + " " + EjeX.slice(-1)
    );
    //valor
    setValueView(
      props.dataGraph.valor.antesvalor + " " + valor.slice(-1) + " " + props.dataGraph.valor.despuesvalor
    );
    //grafico
    setOptions(
      OptionsGraph(
        EjeX.slice(-10),
        EjeY.slice(-10),
        props.dataGraph.graficoTexto,
        props.dataGraph.nacion
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
                    <img src={arrowAndColor < 0 ? upArrow : arrowAndColor > 0 ? downArrow : ""} alt="" height="auto" width="7%"></img>
                    <span style={{ color: arrowAndColor < 0 ? "#3bb54c" : arrowAndColor > 0 ? "red" : "#5F5F5F" }}>
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
