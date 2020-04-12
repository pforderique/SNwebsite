import React from 'react'
import "./brother.scss"


//TODO: make brother pic expand into a different view when clicked to show: pledge class, hometown, major, interests/bio all in a pannel view or sm
//also make a graduation year class, so that when you click a year like 2022 it expands to show the 2022's pics
//idea: somehow have 'special' view on brother flip through different pics of them



class Brother extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: this.props.img,
      name: this.props.name,
      picView: this.props.picView,
    };
  }

  renderBrotherImage(img, name){
    return (
        <button onClick={() => this.setState({picView: this.state.picView == "Normal" ? "Special" : 'Normal'})}>
        <img src={img} alt={name} className={"officer"}/>
        </button>
        );
  }

  render() {
    return (
    <div className={"brother"}>
      <p>{this.props.name}</p>
      <p>Image Holder</p>
    </div>
    );
  }
}

export default Brother
