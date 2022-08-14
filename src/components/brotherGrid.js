import React, { useState, useEffect } from 'react'
import { Container } from '@material-ui/core';

import Brother from './brother'
import { brothers } from './FilteredBros'
import CourseSelect from './CourseSelect';
import StateSelect from './StateSelect';
import YearSelect from './YearSelect';
import "./brother.scss"


export const CLEAR_YEAR_FILTER = 1;

/**
 * @param brothers list of brother objects
 * @returns true iff all brothers in brothers list contain filterable fields
 */
function isFilterable(brothers) {
  if (!brothers) return true;
  return brothers.every((bro) => bro.year && bro.hometown && bro.major);
}

const BrotherGrid = (props) => {

  const [stateFilter, setStateFilter] = useState('');
  const [courseFilter, setCourseFilter] = useState('');
  const [yearFilter, setYearFilter] = useState(CLEAR_YEAR_FILTER);
  const [visibleBros, setVisibleBros] = useState(props.brothers ? props.brothers : brothers);
  const [canFilter, setCanFilter] = useState(false);

  useEffect(() => {
    const brothersToFilter = props.brothers ? props.brothers : brothers;
    setCanFilter(isFilterable(brothersToFilter));
  }, []);

  useEffect(() => {
    const brothersToFilter = props.brothers ? props.brothers : brothers;
    const filteredBros = !canFilter ? 
      brothersToFilter : 
      brothersToFilter.filter((bro) => 
        bro.year % yearFilter === 0 
        && bro.hometown.split(', ')[1].includes(stateFilter) 
        && bro.major.includes(courseFilter));

    setVisibleBros(filteredBros);
  }, [yearFilter, stateFilter, courseFilter])

  const resetFilters = () => {
    setYearFilter(CLEAR_YEAR_FILTER);
    setCourseFilter('');
    setStateFilter('');
  }

  return (
    <div>
      <Container>
          <div className='buttons'>
          <button onClick={()=> resetFilters()}>Clear Filters</button>
            <YearSelect
              yearFilter={yearFilter}
              yearList={[2021, 2022, 2023, 2024, 2025]}
              setYearFilter={setYearFilter}
            />
          </div>

          <div className='filters'>
            <StateSelect
              stateFilter={stateFilter}
              stateSet={new Set(visibleBros.map((bro) =>
                bro.hometown.split(', ')[1]))}
              setStateFilter={setStateFilter}
              placeholder={(stateFilter === '' ? 'All States' : stateFilter)}
            />

            <CourseSelect 
              courseFilter={courseFilter}
              courseSet={new Set(visibleBros.map((bro) =>
                bro.major.split(/(\s|,)+/).filter((course) =>
                  !['', ' ', ',', '&'].includes(course))).flat())}
              setCourseFilter={setCourseFilter}
              placeholder={(courseFilter === '' ? 'All Courses' : courseFilter)}
            />
        </div>
      </Container>
      <div style={{marginTop: '8px', display: 'flex', justifyContent: 'flex-end', margin: '64px 0 16px 0'}}>        
      </div>
      <div>
        <div className={'cards'}>
          {visibleBros.map((bro, index) => 
            <Brother
              key={`${index}`}
              brother={bro}
              includeRole={props.includeRole}
            />)}
        </div>
      </div>
    </div>
  );
}

export default BrotherGrid;
