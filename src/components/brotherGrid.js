import React, { useState, useEffect } from 'react'
import "./brother.scss"
import brothers from '../assets/brothers.json'
import Brother from './brother'

const brotherArray = [];
for (let bro in brothers){
  brotherArray.push(brothers[bro]);
}

// const sortedBroArray = [...brotherArray].sort((bro1, bro2) => bro1.pin - bro2.pin);

brotherArray.sort((bro1, bro2) => bro1.pin - bro2.pin);

function shuffle(array){
  for(let i = array.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * i)
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

const BrotherGrid = () => {

  // const initialFilters = {
  //   year: null,
  //   homestate: null,
  //   course: null,
  // }
  const [stateFilter, setStateFilter] = useState(null);
  const [courseFilter, setCourseFilter] = useState(null);
  const [yearFilter, setYearFilter] = useState(1);
  const [filters, setFilters] = useState({state: stateFilter, course: courseFilter, year: yearFilter});
  const [visibleBros, setVisibleBros] = useState(brotherArray);

  // useEffect(() => {
  //   setFilters
  // }, [stateFilter, courseFilter, yearFilter])

  useEffect(() => {
    let newBros = [];
    for (let ix in brotherArray){
      let bro = brotherArray[ix]
      if (bro.year%yearFilter === 0){
        newBros.push(bro);
      }
    }
    setVisibleBros(newBros);
  }, [yearFilter])

  return (
    <div>
      <div className={'buttons'}>
        <button onClick={()=> setYearFilter(1)}>All</button>
        <button onClick={()=> setYearFilter(2023)}>2023</button>
        <button onClick={()=> setYearFilter(2022)}>2022</button>
        <button onClick={()=> setYearFilter(2021)}>2021</button>

      </div>
    <div>
      <div className={'cards'}>
        {visibleBros.map((bro, index) => <Brother id={index} brother={bro} />)}
      </div>
    </div>
    </div>
  );
}

export default BrotherGrid;
