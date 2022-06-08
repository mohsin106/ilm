import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

// export default function FirstGrad({ rowData, columns, studentTableData }) {
export default function FirstGrad(props) {
  const { dismissedStudents } = props;
  // console.log(JSON.stringify(dismissedStudents));

  const studentCalled = [];
  dismissedStudents.forEach((element) => {
    // console.log(element.grade);
    if (element.grade === "firstGrade") {
      studentCalled.push(element);
    }
  });

  // console.log(JSON.stringify(studentCalled));

  return (
    <div>
      First Grade Component:
      <BootstrapTable
        keyField="id"
        data={studentCalled}
        columns={props.columns}
      />
    </div>
  );
}
