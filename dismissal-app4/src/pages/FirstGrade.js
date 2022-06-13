import React from 'react'

function FirstGrade(props) {
  
  const { dismissedStudents } = props;
  // console.log(JSON.stringify(dismissedStudents));

  const studentCalled = [];
  dismissedStudents.forEach((element) => {
    // console.log(element.grade);
    if (element.grade === "firstGrade") {
      studentCalled.push(element);
    }
  });

  return (
    <div>FirstGrade Component</div>
  )
}

export default FirstGrade