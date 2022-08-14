import React, { useState, useEffect } from 'react'

import "./brother.scss"

const YearSelect = ({ yearList, yearFilter, setYearFilter }) => {
    if (!yearList){
        return null;
    }

    yearList.sort().reverse();
    
    return yearList.map((year) => (
        <button
            style={(yearFilter === year ? {backgroundColor: '#081f47'} : {})}
            id={year}
            key={year}
            onClick={()=> setYearFilter(year)}>{year}</button>
    ));
} 

export default YearSelect