import React from 'react'
import excel from 'xlsx';


function readexcel(){
   
    let fileName = "newData.xlsx";
    let workbook = excel.readFile(fileName);
    
}

console.log(workbook)

export default readexcel