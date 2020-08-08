import React from 'react'
import "./brother.scss"
import Popup from "reactjs-popup"


//TODO: make brother pic expand into a different view when clicked to show: pledge class, hometown, major, interests/bio all in a pannel view or sm
//also make a graduation year class, so that when you click a year like 2022 it expands to show the 2022's pics
//idea: somehow have 'special' view on brother flip through different pics of them

import rush from '../assets/images/brothers/charlesCoffey.jpg'

class Brother extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brother: this.props.brother
    };
  }


  renderBrotherImage(){
    return (
        <img  src={this.state.brother.img} alt={this.state.name} className={"brotherImage"}/>
        );
  }


  render() {
    return (
    <div className={"brother"}>
      <img src={this.state.brother.img} alt={this.state.name} className={"brotherImage"}/>
      <h3><strong>{this.state.brother.name}</strong></h3>
      <h4>{this.state.brother.major}</h4>
      <h4>{this.state.brother.hometown}</h4>
      <Popup
        trigger={<button className={'brotherDescription'}> </button>}
        modal
        closeOnDocumentClick
      >
          <div id="main">
              <section id="one" className="tiles">

                <img src={this.state.brother.img} alt={this.state.name} className={"popupImage"}/>

                <div className="brotherPopup">
                  <h2 align = "center">{this.state.brother.name}</h2>
                  <p>Class of {this.state.brother.year}</p>
                  <p>From {this.state.brother.hometown}</p>
                  <p>{this.state.brother.major}</p>
                </div>
                <div className={"quote"}>
                  <p>"{'\t'}{this.state.brother.bio}
                    {'\t'}"</p>
                </div>
              </section>
          </div>
      </Popup>
    </div>
    );
  }
}

export default Brother

