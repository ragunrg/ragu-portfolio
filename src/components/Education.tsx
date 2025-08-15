import React from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";

// Register all community modules
ModuleRegistry.registerModules([AllCommunityModule]);

const rowData = [
  {
    degree: "B.Tech",
    field: "Information Technology",
    institution: "MIT Campus, Anna University",
    year: 2022,
    grade: "7.48 CGPA",
  },
  {
    degree: "Higher Secondary",
    field: "Bio- Mathematics",
    institution: "Velammal Matriculation Hr. Sec. School",
    year: 2018,
    grade: "91.5%",
  },
  {
    degree: "Secondary",
    field: "General",
    institution: "N.A.Konduraja Memorial High School",
    year: 2016,
    grade: "93.2%",
  },
];

const columnDefs: ColDef[] = [
  { headerName: "Degree", field: "degree", flex: 1 },
  { headerName: "Field of Study", field: "field", flex: 1 },
  { headerName: "Institution", field: "institution", flex: 2 },
  { headerName: "Year", field: "year", flex: 1 },
  { headerName: "Grade / Score", field: "grade", flex: 1 },
];

const Education = () => (
  <>
    <h2
      id="educational-background"
      className="text-2xl font-bold text-gray-800 dark:text-white mb-4"
    >
      Educational Background
    </h2>
    <div className="ag-theme-alpine" style={{ height: 200, width: 1000 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        domLayout="autoHeight"
        defaultColDef={{ sortable: true, filter: true }}
      />
    </div>
  </>
);

export default Education;
