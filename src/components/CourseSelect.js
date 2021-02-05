import React, { useState, useEffect } from 'react'
import "./brother.scss"
import Select from 'react-select'

const CourseSelect = ({ courseList, placeholder, setCourseFilter }) => {
    if (!courseList){
        return null;
    }

    const customStyles = {
        option: provided => ({
          ...provided,
          color: 'black'
        }),
        control: provided => ({
          ...provided,
          color: 'black'
        }),
        singleValue: provided => ({
          ...provided,
          color: 'black'
        })
    }

    courseList.sort();

    const options = []
    courseList.forEach(state => {
        options.push({
            value: state,
            label: state
        });
    });

    return (
        <div
            style={{ width: '15%', display: 'inline-block' }}
        >
            <Select 
                isDisabled={false}
                options={[{value: '', label: 'Select Course'}, ...options]}
                placeholder={placeholder}
                onChange={event => setCourseFilter(event.value)}
                styles={customStyles}
            />
        </div>
        
    );
} 

export default CourseSelect