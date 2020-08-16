import React from 'react'
import "./brother.scss"
import Grid from '@material-ui/core/Grid'
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
    shuffle(brothers)
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
              obj =>
              {
                let brother = <></>;
                switch (this.state.filter) {
                  case 0:
                    brother = <Brother brother={obj}/>
                    break;
                  case 1:
                    if(obj.year === 2023){
                      brother = <Brother brother={obj}/>
                    }
                    break;
                  case 2:
                    if(obj.year === 2022){
                      brother = <Brother brother={obj}/>
                    }
                    break;
                  case 3:
                    if(obj.year === 2021){
                      brother = <Brother brother={obj}/>
                    }
                    break;
                  default:
                    return null;
                }
                return brother;

              })
          }
        </div>
        <div className={'brotherGrid'}>
          <Grid container spacing={10}>
            {

              brothers.map( obj => {
                switch (this.state.filter) {
                  case 0:
                    return <Grid item xs={6} sm={4}>
                      <Brother brother={obj}/>
                    </Grid>
                  case 1:
                    if(obj.year === 2023){
                      return <Grid item xs={6} sm={4}>
                        <Brother brother={obj}/>
                      </Grid>
                    }
                    break;
                  case 2:
                    if(obj.year === 2022){
                      return <Grid item xs={6} sm={4}>
                        <Brother brother={obj}/>
                      </Grid>
                    }
                    break;
                  case 3:
                    if(obj.year === 2021){
                      return <Grid item xs={6} sm={4}>
                        <Brother brother={obj}/>
                      </Grid>
                    }
                    break;
                  default:
                    return "ok";
                }

              })}
          </Grid>
        </div>
      </div>
      </div>
    );
  }
}

export default BrotherGrid;
