import React from 'react'
import "./brother.scss"
import Grid from '@material-ui/core/Grid'
import brotherInfo from '../assets/brotherInfo'
import Brother from './brother'




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
        <Grid container spacing={3}>
          <Grid item xs={6} sm={2}>
            <button onClick= {()=>  this.setState({ filter: 0 })} >All</button>
          </Grid>
          <Grid item xs={6} sm={2}>
            <button onClick={()=> this.setState({ filter: 1 })} >2023</button>
          </Grid>
          <Grid item xs={6} sm={2}>
            <button onClick={()=> this.setState({ filter: 2 })}>2022</button>
          </Grid>
          <Grid item xs={6} sm={2}>
            <button onClick={()=> this.setState({ filter: 3 })}>2021</button>
          </Grid>
          <Grid item xs={6} sm={2}>
            <button onClick={()=> this.setState({ filter: 4 })}>2020</button>
          </Grid>
        </Grid>
        <br/>
        <div className={'brotherGrid'}>
          <Grid container spacing={3}>
            {
              brotherInfo.map( obj => {
                console.log(this.state)
                switch (this.state.filter) {
                  case 0:
                    return <Grid item xs={6} sm={3}>
                      <Brother brother={obj}/>
                    </Grid>
                  case 1:
                    if(obj.year === 2023){
                      return <Grid item xs={6} sm={3}>
                        <Brother brother={obj}/>
                      </Grid>
                    }
                    break;
                  case 2:
                    if(obj.year === 2022){
                      return <Grid item xs={6} sm={3}>
                        <Brother brother={obj}/>
                      </Grid>
                    }
                    break;
                  case 3:
                    if(obj.year === 2021){
                      return <Grid item xs={6} sm={3}>
                        <Brother brother={obj}/>
                      </Grid>
                    }
                    break;
                  case 4:
                    if(obj.year === 2020){
                      return <Grid item xs={6} sm={3}>
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
    );
  }
}

export default BrotherGrid;
