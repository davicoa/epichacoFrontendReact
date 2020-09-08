import React from "react";
import iconDownload from "images/iconDownload.png";
import AdminService from "services/AdminService";
import * as XLSX from "xlsx";
import * as FileSaver from "file-saver";

const fileType =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
const fileExtension = ".xlsx";

const DonwloadXlsx = (props) => {
  const { name } = props;


  const exportToCSV = async () => {

    if (window.confirm("Esta por descargar: " + name)) {
      const res = await AdminService.adminGet(name, -1);
    const ws = XLSX.utils.json_to_sheet(res.data);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, name + fileExtension);
    }
  };
  return (
    <div>
      <span onClick={() => exportToCSV()} className="tabButtons">
        <img src={iconDownload} alt="" height="auto" width="25%"></img>
      </span>
    </div>
  );
};
export default DonwloadXlsx;
