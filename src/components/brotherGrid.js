import React, { useState, useEffect } from 'react'
import "./brother.scss"
import { brothers, filteredBros } from './FilteredBros'
import Brother from './brother'
import StateSelect from './StateSelect';
import { Container } from '@material-ui/core';
import CourseSelect from './CourseSelect';


function shuffle(array){
  for(let i = array.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * i)
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

function intersection(setA, setB) {
  let _intersection = new Set()
  for (let elem of setB) {
      if (setA.has(elem)) {
          _intersection.add(elem)
      }
  }
  return _intersection
}

const BrotherGrid = () => {

  const [stateFilter, setStateFilter] = useState('');
  const [courseFilter, setCourseFilter] = useState('');
  const [yearFilter, setYearFilter] = useState(1);
  const [filters, setFilters] = useState(false);
  const [visibleBros, setVisibleBros] = useState(brothers);

  useEffect(() => {    
    const newBros = new Array();

    for (let bro of brothers){
      if (bro.year%yearFilter === 0 && bro.hometown.includes(stateFilter) && bro.major.includes(courseFilter)){
        newBros.push(bro)
      }
    }

    setVisibleBros(newBros);
  }, [yearFilter, stateFilter, courseFilter])

  const resetFilters = () => {
    setYearFilter(1);
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
        {visibleBros.map((bro, index) => <Brother key={`${index}`} brother={bro} />)}
      </div>
    </div>
    </div>
  );
}

export default BrotherGrid;
