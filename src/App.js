import React from "react";
import "./App.css";
import MaterialTable from "material-table";

function App() {
  const hello = (event, rowData) => {
    alert("Hi I am Robot.." + rowData.name);
  };

  const actionsArray = [
    {
      icon: "save",
      tooltip: "Save User",
      onClick: (event, rowData) => alert("You saved " + rowData.name),
    },
    {
      tooltip: "Delete User",
      icon: rowData => <img src="https://avatars0.githubusercontent.com/u/7895451?s=460&v=4" style={{width: 20, borderRadius: '50%'}}/>,
      onClick: (event, rowData) => hello(event, rowData),
    },
  ];
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <MaterialTable
        title="Positioning Actions Column Preview"
        columns={[
          { title: "Name", field: "name" },
          { title: "Surname", field: "surname" },
          { title: "Birth Year", field: "birthYear", type: "numeric" },
          {
            title: "Birth Place",
            field: "birthCity",
            lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
          },
        ]}
        data={[
          { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
          {
            name: "Zerya Betül",
            surname: "Baran",
            birthYear: 2017,
            birthCity: 34,
          },
        ]}
        actions={actionsArray}
        options={{
          actionsColumnIndex: -1,
        }}
      />
    </div>
  );
}

export default App;
