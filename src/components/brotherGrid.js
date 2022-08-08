import React, { useState, useEffect } from 'react'
import "./brother.scss"
import { brothers, filteredBros } from './FilteredBros'
import Brother from './brother'
import StateSelect from './StateSelect';
import { Container } from '@material-ui/core';
import CourseSelect from './CourseSelect';

const CLEAR_YEAR_FILTER = 1;

const BrotherGrid = (props) => {

  const [stateFilter, setStateFilter] = useState('');
  const [courseFilter, setCourseFilter] = useState('');
  const [yearFilter, setYearFilter] = useState(CLEAR_YEAR_FILTER);
  const [visibleBros, setVisibleBros] = useState(props.brothers ? props.brothers : brothers);

  useEffect(() => {
    const brothersToFilter = props.brothers ? props.brothers : brothers;
    const filteredBros = 
      props.notFilterable ? brothersToFilter : brothersToFilter.filter((bro) => 
    bro.year % yearFilter === 0 
    && bro.hometown.includes(stateFilter) 
    && bro.major.includes(courseFilter))
    console.log('brothersToFilter', brothersToFilter);
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
      <Container className={'buttons'}>
        <div
          style={{ display: 'inline-block' }}
        >
          <button onClick={()=> resetFilters()}>All</button>
          <button onClick={()=> setYearFilter(2024)}>2024</button>
          <button onClick={()=> setYearFilter(2023)}>2023</button>
          <button onClick={()=> setYearFilter(2022)}>2022</button>
          <button onClick={()=> setYearFilter(2021)}>2021</button>
        </div>
        {/* <StateSelect
          stateFilter={stateFilter}
          stateList={Object.keys(filteredBros.state)}
          setStateFilter={setStateFilter}
          placeholder={(stateFilter === '' ? 'Select State' : stateFilter)}
        />

        <CourseSelect 
          courseFilter={courseFilter}
          courseList={Object.keys(filteredBros.course)}
          setCourseFilter={setCourseFilter}
          placeholder={(courseFilter === '' ? 'Select Course' : courseFilter)}
        /> */}
      </Container>
    <div>
      <div className={'cards'}>
        {visibleBros.map((bro, index) => <Brother key={`${index}`} brother={bro} modal={props.modal}/>)}
      </div>
    </div>
    </div>
  );
}

export default BrotherGrid;
