import React from 'react';

import { CLEAR_YEAR_FILTER } from './brotherGrid';
import './brother.scss';

const YearSelect = ({ yearList, yearFilter, setYearFilter }) => {
  if (!yearList) {
    return null;
  }

  yearList.sort().reverse();

  return yearList.map(year => (
    <button
      style={yearFilter === year ? { backgroundColor: '#dba100' } : {}}
      id={year}
      key={year}
      onClick={() =>
        yearFilter === year
          ? setYearFilter(CLEAR_YEAR_FILTER)
          : setYearFilter(year)
      }
    >
      {year}
    </button>
  ));
};

export default YearSelect;
