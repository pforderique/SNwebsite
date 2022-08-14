import React from 'react';
import Select from 'react-select';

import './brother.scss';

const StateSelect = ({
  stateSet,
  placeholder,
  stateFilter,
  setStateFilter,
}) => {
  if (!stateSet) {
    return null;
  }

  const customStyles = {
    option: provided => ({
      ...provided,
      color: 'black',
    }),
    control: provided => ({
      ...provided,
      color: 'black',
    }),
    singleValue: provided => ({
      ...provided,
      color: 'black',
    }),
    // menu: ({ width, ...css }) => ({ ...css })
    width: '20%',
  };

  const stateList = Array.from(stateSet).sort();
  const options = stateList.map(state => ({
    value: state,
    label: state,
  }));

  return (
    <div className="dropdown">
      <Select
        isDisabled={false}
        options={[{ value: '', label: 'All States' }, ...options]}
        value={stateFilter}
        placeholder={placeholder}
        onChange={event => setStateFilter(event.value)}
        styles={customStyles}
      />
    </div>
  );
};

export default StateSelect;
