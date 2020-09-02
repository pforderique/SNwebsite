import React from 'react'
import "./brother.scss"
import brothers from '../assets/brothers.json'
import Brother from './brother'



function shuffle(array){
  for(let i = array.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * i)
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

class BrotherGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 0
    };
  }


  render() {
    return (
      <div>
        <div className={'buttons'}>
          <button onClick= {()=>  this.setState({ filter: 0 })} >All</button>
          <button onClick={()=> this.setState({ filter: 1 })} >2023</button>
          <button onClick={()=> this.setState({ filter: 2 })}>2022</button>
          <button onClick={()=> this.setState({ filter: 3 })}>2021</button>
        </div>
      <div>
        <div className={'cards'}>
          {
            brothers.map(
              bro =>
              {
                if (bro.img == 'chrisPicard'){
                  return;
                }
                switch (this.state.filter) {
                  case 0:
                    return <Brother brother={bro}/>
                    break;
                  case 1:
                    if(bro.year === 2023){
                      return <Brother brother={bro}/>
                    }
                    break;
                  case 2:
                    if(bro.year === 2022){
                      return <Brother brother={bro}/>
                    }
                    break;
                  case 3:
                    if(bro.year === 2021){
                      return <Brother brother={bro}/>
                    }
                    break;
                  default:
                    return null;
                }
              })
          }
        </div>
        </div>
      </div>
    );
  }
}

export default BrotherGrid;
