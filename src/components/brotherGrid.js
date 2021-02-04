import React, { useState, useEffect } from 'react'
import "./brother.scss"
import brothers from '../assets/brothers.json'
import Brother from './brother'
import StateSelect from './StateSelect';
import { Container } from '@material-ui/core';

// const brotherArray = [];
brothers.sort((bro1, bro2) => bro1.pin - bro2.pin);

const filteredBros = {
                        year: {
                                // 1: new Array(),
                                2023: new Array(),
                                2022: new Array(),
                                2021: new Array()
                              },
                        state: {
                          // ['']: new Array()
                        },
                        course: {}
};

for (let ix in brothers){
  let bro = brothers[ix]

  let year = bro.year;
  // filteredBros.year[1].push(bro.name);
  filteredBros.year[year].push(bro.name);

  let homestate = (bro.name.includes('Suleman') ? 'Pakistan' : bro.hometown.slice(-2));
  // filteredBros.state[''].push(bro.name)
  if (homestate in filteredBros.state){
    filteredBros.state[homestate].push(bro.name);
  } else {
    filteredBros.state[homestate] = [bro.name];
  }

  let major = bro.major.split(':')[0]
  if (major.includes('&')){
    major = major.split(' & ');
  }
  if (typeof(major) == 'string'){
    if (major in filteredBros.course){
      filteredBros.course[major].push(bro.name);
    } else {
      filteredBros.course[major] = [bro.name];
    }
  } else {
    for (let m of major){
      if (m in filteredBros.course){
        filteredBros.course[m].push(bro.name);
      } else {
        filteredBros.course[m] = [bro.name];
      }
    }
  }
  console.log(filteredBros)
}


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

  // const shuffledBros = [...brothers]
  // useEffect(() => {
  //   shuffle(shuffledBros);
  // }, [])

  const [stateFilter, setStateFilter] = useState('');
  const [courseFilter, setCourseFilter] = useState('');
  const [yearFilter, setYearFilter] = useState(1);
  const [filters, setFilters] = useState(false);
  const [visibleBros, setVisibleBros] = useState(brothers);

  useEffect(() => {    
    const newBros = new Array();

    let yearBros = (yearFilter === 1 ? new Set(brothers.map(bro => bro.name)) : new Set(filteredBros.year[yearFilter]))
    let stateBros = (stateFilter == '' ? new Set(brothers.map(bro => bro.name)) : new Set(filteredBros.state[stateFilter]))
    let courseBros = (courseFilter == '' ? new Set(brothers.map(bro => bro.name)) : new Set(filteredBros.course[courseFilter]))

    // let tempValidBros = intersection(yearBros, stateBros);
    // let validBros = intersection(tempValidBros, courseBros);

    for (let bro of brothers){
      if (yearBros.has(bro.name)){
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
  // console.log(typeof(filteredBros.state))
  return (
    <div>
      <Container className={'buttons'}>
        <button onClick={()=> resetFilters()}>All</button>
        <button onClick={()=> setYearFilter(2023)}>2023</button>
        <button onClick={()=> setYearFilter(2022)}>2022</button>
        <button onClick={()=> setYearFilter(2021)}>2021</button>
        {/* <button onClick={()=> setStateFilter('NC')}>TX</button> */}
        {/* <StateSelect
          stateFilter={stateFilter}
          stateList={Object.keys(filteredBros.state)}
          setStateFilter={setStateFilter}
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
