import React, { useState, useEffect } from 'react'
import { Container } from '@material-ui/core';

import Brother from './brother'
import { brothers, filteredBros } from './FilteredBros'
import CourseSelect from './CourseSelect';
import StateSelect from './StateSelect';
import "./brother.scss"


const CLEAR_YEAR_FILTER = 1;

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
        && bro.hometown.includes(stateFilter) 
        && bro.major.includes(courseFilter));

    console.log('filteredBros', filteredBros);
    setVisibleBros(filteredBros);
  }, [yearFilter, stateFilter, courseFilter])

  const resetFilters = () => {
    setYearFilter(CLEAR_YEAR_FILTER);
    setCourseFilter('');
    setStateFilter('');
  }

  return (
    <div>
      {canFilter && <Container className={'buttons'}>
        <div
          // style={{ display: 'inline-block' }}
          style={{ display: 'flex-wrap', alignItems:'space-between'}}
        >
          <button onClick={()=> resetFilters()}>All</button>
          <button onClick={()=> setYearFilter(2025)}>2025</button>
          <button onClick={()=> setYearFilter(2024)}>2024</button>
          <button onClick={()=> setYearFilter(2023)}>2023</button>
          <button onClick={()=> setYearFilter(2022)}>2022</button>
          <button onClick={()=> setYearFilter(2021)}>2021</button>
        {/* <StateSelect
          stateFilter={stateFilter}
          stateSet={new Set(visibleBros.map((bro) =>
            bro.hometown.split(', ')[1]))}
          setStateFilter={setStateFilter}
          placeholder={(stateFilter === '' ? 'Select State' : stateFilter)}
        />

        <CourseSelect 
          courseFilter={courseFilter}
          courseSet={new Set(visibleBros.map((bro) =>
            bro.major.split(/(\s|,)+/).filter((course) =>
              !['', ' ', ',', '&'].includes(course))).flat())}
          setCourseFilter={setCourseFilter}
          placeholder={(courseFilter === '' ? 'Select Course' : courseFilter)}
        /> */}
        </div>
      </Container>}
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
