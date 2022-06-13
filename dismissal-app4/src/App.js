import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { Button } from "react-bootstrap";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import carTagData from "./components/carTagData"
import Home from "./pages/Home"
import FirstGrade from "./pages/FirstGrade"
import Error from "./pages/Error"

function App() {
  // const [carTags, setCarTags] = useState(carTagData)
  // console.log(JSON.stringify(carTags))
  const [API_URL] = useState("https://raw.githubusercontent.com/mohsin106/ilm/main/dismissal-app/students2.json");
  const [rowData, setRowData] = useState("");
  const [studentTableData, setStudentTableData] = useState(JSON.parse(localStorage.getItem("studentData")) || []);
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
    // console.log(JSON.stringify(data))

    // Flip value for dismissed property in studentTableData (locally stored)
    setStudentTableData((prevData) => {
      return prevData.map((carTag) => {
        // console.log(carTag.fName, carTag.dismissed);
        return carTag.id === data.id
        ? { ...carTag, dismissed: !carTag.dismissed }
        : carTag;
      });
    });
  }

  // Set dismissedStudents
  // useEffect(() => {
  //   setDismissedStudents(
  //     studentTableData.map((studentInfo) => {
  //       // return studentInfo.dismissed && { ...studentInfo };
  //       if (studentInfo.dismissed) {
  //         return studentInfo
  //       }
  //     })
  //   );
  // }, [studentTableData]);

  // Set dismissedStudents using filter
  useEffect(() => {
    setDismissedStudents(
      studentTableData.filter((studentInfo) => studentInfo.dismissed  ));
  }, [studentTableData]);
  console.log(JSON.stringify(dismissedStudents));
  // console.log(JSON.stringify(studentTableData));

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
  
  
  return (
      <>
      <NavBar />
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
        <Route path="*" element={<Error/>} />
      </Routes>
      {/* {JSON.stringify(dismissedStudents)} */}
      {dismissedStudents.length > 0 ? <BootstrapTable
        key={dismissedStudents.id}
        keyField="id"
        data={dismissedStudents}
        columns={classRoomColumns}
      /> : null}
      </>
  )
}
export default App;
