import React, { useState, useEffect } from 'react'
import "./brother.scss"
import Select from 'react-select'

const StateSelect = ({stateSet, placeholder, setStateFilter }) => {
    if (!stateSet){
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

    const stateList = Array.from(stateSet).sort();
    const options = stateList.map((state) => ({
        value: state,
        label: state 
    }))

    return (
        <div
            style={{ width: '15%', display: 'inline-block', padding: '4px'}}
        >
            <Select 
                isDisabled={false}
                options={[{value: '', label: 'Select State'}, ...options]}
                placeholder={placeholder}
                onChange={event => setStateFilter(event.value)}
                styles={customStyles}
            />
        </div>
        
    );
} 

export default StateSelect