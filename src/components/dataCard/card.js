import React, { useState } from "react";
import "./style.css";
import ReactApexChart from "react-apexcharts";
//import ClipLoader from "react-spinners/ClipLoader";
import logoEscudo from "images/logo_escudo.png";
import OptionsGraph from "constant/setOptions";

const DataCard = (props) => {
  const options = OptionsGraph(
    "Precio",
    [31, 40, 28, 51, 42, 109, 100],
    [
      "2018-09-19T00:00:00.000Z",
      "2018-09-19T01:30:00.000Z",
      "2018-09-19T02:30:00.000Z",
      "2018-09-19T03:30:00.000Z",
      "2018-09-19T04:30:00.000Z",
      "2018-09-19T05:30:00.000Z",
      "2018-09-19T06:30:00.000Z",
    ]
  );
  return (
    <div className="cardContainer">
        {
            false ?
                <div className="centarClip">
                    
                </div>
                :
                <div className="apexContainer">
                    <div className="headerGraphContainer">
                        <div className="headerGraph">
                            <div className="headerGraph2">
                                <span>ffff</span>
                            </div>
                            <div className="headerGraph3">
                                <img className="headerGraphicon" src={logoEscudo} alt="Escudo"></img>
                            </div>
                            <br />
                        </div>
                        <div className="headerData">
                            <div className="spanDescripcion">
                                <span style={{ fontSize: "x-small", float: "left", fontWeight: 'bold', marginLeft: "5%" }}>ffff</span><br />
                            </div>
                            <div style={{ textAlign: 'left', fontWeight: 'bold', marginLeft: "3%", fontSize: "large", color: 'red' }}>
                                
                                <span style={{ marginLeft: "2%", fontSize: "1.5em" }}>asdfasd</span>
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
};

export default DataCard;
