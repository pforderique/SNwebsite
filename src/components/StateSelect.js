import React, { useState, useEffect } from 'react'
import Select from 'react-select'

const StateSelect = ({ stateList, placeholder, setStateFilter }) => {
    if (!stateList){
        return null;
    }

    const customStyles = {
        option: (provided, state) => ({
          ...provided,
          borderBottom: '1px dotted pink',
          color: state.isSelected ? 'red' : 'blue',
          padding: 20,
        }),
        control: () => ({
          // none of react-select's styles are passed to <Control />
          width: 200,
        }),
        singleValue: (provided, state) => {
          const opacity = state.isDisabled ? 0.5 : 1;
          const transition = 'opacity 300ms';
      
          return { ...provided, opacity, transition };
        }
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
            placeholder={placeholder}
            onChange={event => setStateFilter(event.value)}
            className={'buttons'}
            styles={customStyles}
        />
    );
} 

export default StateSelect