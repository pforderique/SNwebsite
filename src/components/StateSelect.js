import React, { useState, useEffect } from 'react'
import Select from 'react-select'

const StateSelect = ({ stateList, stateFilter, setStateFilter }) => {
    if (!stateList){
        return null;
    }

    const options = []
    stateList.forEach(state => {
        options.push({
            value: state,
            label: state
        });
    });

    console.log('ops: ', options, 'list: ', stateList)
    return (
        <Select 
            isDisabled={false}
            options={options}
            placeholder={(stateFilter === '' ? 'Select' : stateFilter)}
            onChange={event => setStateFilter(event.value)}
        />
    );
} 

export default StateSelect