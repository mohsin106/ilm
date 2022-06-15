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
import { v1 as uuidv1 } from "uuid"
import axios from "axios"

function App() {
  // const [carTags, setCarTags] = useState(carTagData)
  // console.log(JSON.stringify(carTags))
  const [API_URL] = useState("https://raw.githubusercontent.com/mohsin106/ilm/main/dismissal-app/students2.json");
  const [rowData, setRowData] = useState("");
  const [studentTableData, setStudentTableData] = useState([]);
  const [dismissedStudents, setDismissedStudents] = useState([]);
  
  
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
        // localStorage.setItem("studentData", JSON.stringify(_studentData));
        // setStudentTableData(JSON.parse(localStorage.getItem("studentData")))
        setStudentTableData(_studentData)
      }
      getCarTags();
    }, [API_URL]);
    
    // console.log(JSON.stringify(studentTableData));

  // Handle onClick
  function onFollowChanged(data) {
    // Flip value for dismissed property in studentTableData (locally stored)
    setStudentTableData((prevData) => {
      return prevData.map((studentInfo) => {
        // console.log(studentInfo.fName, studentInfo.dismissed);
        return studentInfo.id === data.id
        ? { ...studentInfo, dismissed: !studentInfo.dismissed }
        : studentInfo;
      });
    });
  }

  // // Set dismissedStudents using filter
  useEffect(() => {
    // console.log(JSON.stringify(studentTableData));
    setDismissedStudents(
      studentTableData.filter((studentInfo) => studentInfo.dismissed  ));
  }, [studentTableData]);
  // console.log(JSON.stringify(dismissedStudents));

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
    },
    {
      dataField: "deleteBtn",
      text: "Delete",
      formatter: deleteFollow
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
  
  // Create custom button in table
  function deleteFollow(cell, row, rowIndex, formatExtraData) {
    // console.log(JSON.stringify(row.dismissed));
    return (
      <Button onClick={() => deleteStudent(row)}>
        Delete Student
      </Button>
    );
  }

  const addStudent = () => {

  }

  const deleteStudent = (data) => {
    setStudentTableData(prevData => prevData.filter((studentInfo) => studentInfo.id != data.id))
    // console.log(JSON.stringify(filteredStudentData))
    // console.log(JSON.stringify(studentTableData))
  }

  const updateStudent = () => {

  }

  const saveJson = (students) => {

  }

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
