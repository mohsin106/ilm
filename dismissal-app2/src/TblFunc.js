import React, { useEffect, useRef } from "react"
import $ from 'jquery'
// import 'datatables.net-dt/css/jquery.dataTables.css'
// import 'datatables.net-buttons-dt/css/buttons.dataTables.css'
export function TblFunc(props) {

// const $ = require('jquery');
$.DataTable = require('datatables.net');

// require( 'datatables.net-buttons/js/dataTables.buttons.min' );
require( 'datatables.net-buttons/js/buttons.html5.min' );

const jzip = require( 'jszip');

window.JSZip = jzip;

const tableRef = useRef()

// Marco's data example.
useEffect(() => {
    // console.log(tableRef.current)
    $(tableRef.current).DataTable(
        {
            data: props.data,
            columns: [
                { title: "Car Tag"},
                { title: "First Name"},
                { title: "Last Name"},
                { title: "Grade"},
                { title: "Call"}
            ],
            dom: 'Bfrtip',
            buttons: [
                'excelHtml5',
                'copy'
            ],
            destroy: true  // I think some clean up is happening here
        }
    )
},[props.data])

    return (
        <div className="dataTable">
            <table className="display" width="100%" ref={ tableRef }></table>
        </div>
        
    )
}