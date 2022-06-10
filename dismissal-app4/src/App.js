import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { Button } from "react-bootstrap";
import FirstGrade from "./components/FirstGrade";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
function App() {
  const [API_URL] = useState(
    "https://raw.githubusercontent.com/mohsin106/ilm/main/dismissal-app/students2.json"
  );
  const [rowData, setRowData] = useState("");
  const [studentTableData, setStudentTableData] = useState(
    JSON.parse(localStorage.getItem("studentData")) || []
  );
  const [dismissedStudents, setDismissedStudents] = useState("");

  // Get data with API call
  useEffect(() => {
    async function getCarTags() {
      const response = await fetch(API_URL);
      const data = await response.json();
      // console.log(JSON.stringify(data));
      const _studentData = data.carTags.map((tagInfo) => {
        return tagInfo;
      });
      // Save data to local storage
      localStorage.setItem("studentData", JSON.stringify(_studentData));
    }
    getCarTags();
  }, [API_URL]);

  // Handle onClick
  function onFollowChanged(data) {
    // let dismissed = data.dismissed;
    // console.log(JSON.stringify(dismissed));

    setRowData(data);

    // Flip value for dismissed property in studentTableData (locally stored)
    setStudentTableData((prevData) => {
      return prevData.map((carTag) => {
        // console.log(carTag.dismissed);
        return carTag.id === data.id
          ? { ...carTag, dismissed: !carTag.dismissed }
          : carTag;
      });
    });
  }

  // Set dismissedStudents
  useEffect(() => {
    setDismissedStudents(
      studentTableData.map((studentInfo) => {
        return studentInfo.dismissed && { ...studentInfo };
      })
    );
  }, [studentTableData]);

  console.log(JSON.stringify(dismissedStudents));

  // Create custom button in table
  function linkFollow(cell, row, rowIndex, formatExtraData) {
    // console.log(JSON.stringify(row.dismissed));
    return (
      <Button disabled={row.dismissed} onClick={() => onFollowChanged(row)}>
        Call Student
      </Button>
    );
  }

  const columns = [
    {
      dataField: "tagID",
      text: "tagID",
      sort: true
    },
    {
      dataField: "fName",
      text: "First Name",
      sort: true
    },
    {
      dataField: "lName",
      text: "Last Name"
    },
    {
      dataField: "grade",
      text: "Grade",
      sort: true
    },
    {
      dataField: "button",
      text: "Call",
      formatter: linkFollow
    }
  ];

  const classRoomColumns = [
    {
      dataField: "tagID",
      text: "tagID",
      sort: true
    },
    {
      dataField: "fName",
      text: "First Name",
      sort: true
    },
    {
      dataField: "lName",
      text: "Last Name"
    },
    {
      dataField: "grade",
      text: "Grade",
      sort: true
    }
  ];

  // return (
  //   <div>
  //     <NavBar />
  //     <main>
  //       <BootstrapTable
  //         keyField="id"
  //         data={studentTableData}
  //         columns={columns}
  //       />
  //       {rowData && (
  //         <FirstGrade
  //           // rowData={rowData}
  //           dismissedStudents={dismissedStudents}
  //           columns={classRoomColumns}
  //         />
  //       )}
  //     </main>
  //   </div>
  // );

  return (
    <div>
      <NavBar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <BootstrapTable
                keyField="id"
                data={studentTableData}
                columns={columns}
              />
            }
          />
          <Route
            path="/FirstGrade"
            element={
              <FirstGrade
                rowData={rowData}
                dismissedStudents={dismissedStudents}
                columns={classRoomColumns}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
