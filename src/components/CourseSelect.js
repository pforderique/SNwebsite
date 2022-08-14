import React, { useState, useEffect } from 'react'
import "./brother.scss"
import Select from 'react-select'

const CourseSelect = ({ courseSet, placeholder, courseFilter, setCourseFilter }) => {
    if (!courseSet){
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

    const courseList = Array.from(courseSet).sort();
    const options = courseList.map((course) => ({
        value: course,
        label: course 
    }))

    return (
        <div className='dropdown'>
            <Select 
                isDisabled={false}
                options={[{value: '', label: 'All Courses'}, ...options]}
                value={courseFilter}
                placeholder={placeholder}
                onChange={event => setCourseFilter(event.value)}
                styles={customStyles}
            />
        </div>
        
    );
} 

export default CourseSelect