import React from 'react'

import Brother from '../components/brother'


import Grid from '@material-ui/core/Grid';

import brotherInfo from '../assets/brotherInfo'

import rush from '../assets/images/brothers/charlesCoffey.jpg'
import rush2 from '../assets/images/brothers/marcoFleming.jpg'
import rush3 from '../assets/images/brothers/moisesTrejo.jpg'

var brotherMap = {
  "charles": rush,
  "marco": rush2,
  "moi": rush3
};

//TODO: make brother pic expand into a different view when clicked to show: pledge class, hometown, major, interests/bio all in a pannel view or sm
//also make a graduation year class, so that when you click a year like 2022 it expands to show the 2022's pics
//idea: somehow have 'special' view on brother flip through different pics of them


class BrotherGrids extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	bros: "all"
    };
  }


  renderBrotherInfo(){
            {brotherInfo.map( obj => {
               return <Grid item xs={6} sm={3} onClick={ () =>logItem(obj.name)}>
                        	<Brother name={obj.name} img={brotherMap[obj.img]} bio={obj.bio} year={obj.year} major={obj.major} hometown={obj.hometown} nickname={obj.nickname}/>
                       </Grid>
             })}
  }

  render() {
    return (
    	this.renderBrotherInfo()
    );
  }
}
// brother name
// a bio
// hometown
// major
// officer positions

function logItem(item){
  console.log(item)
}

//this.renderBrotherImage(this.props.img, this.props.name)
//<button src={img} onClick={() => this.setState({picView: this.state.picView == "Normal" ? "Special" : 'Normal'})}>
export default BrotherGrids