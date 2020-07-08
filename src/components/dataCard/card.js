import React, { useState, useEffect } from "react";
import "./style.css";
import ReactApexChart from "react-apexcharts";
import ClipLoader from "react-spinners/ClipLoader";
import logoChaco from "images/ISO_Mesadetrabajo_1.png"
import OptionsGraph from "constant/optionsGraphs";
import ApiGraphsDataService from "services/ApiGraphsDataService";

const DataCard = (props) => {
  const [loading, setLoading] = useState(true);
  const [options, setOptions] = useState();
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [valueView, setValueView] = useState("");

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
      if (
        item[props.dataGraph.variable[0]] === props.dataGraph.variable[1] ||
        (props.dataGraph.variable[1] === "" &&
          item[props.dataGraph.variable[0]] !== "")
      ) {
        EjeX.push(item[props.dataGraph.grafico[0]]); //fecha
        EjeY.push(parseFloat(item[props.dataGraph.grafico[1]])); //dato
        if (item[props.dataGraph.title[1]]) {
          name = item[props.dataGraph.title[1]];
        }
        if (item[props.dataGraph.valor[1]]) {
            valor.push(parseFloat(item[props.dataGraph.valor[1]])); // valor mostrado
        }
      }
    });
    //tittle
    setTitle(
        props.dataGraph.title[0] + " " + name + " " + props.dataGraph.title[2]
    );
    //subtitle
    setSubtitle(
        props.dataGraph.subtitle[0] + " " + EjeX.slice(-1)
    );
    //valor
    setValueView(
        props.dataGraph.valor[0] + " " + valor.slice(-1) +" "+ props.dataGraph.valor[2]
    );
    //grafico
    setOptions(
      OptionsGraph(
        EjeX.slice(-10),
        EjeY.slice(-10),
        props.dataGraph.graficoTexto[1]
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
                  src={logoChaco}
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
                {valueView}
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

export default DataCard;
