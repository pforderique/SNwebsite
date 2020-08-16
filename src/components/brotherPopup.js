import React from 'react'
import "./brother.scss"

class Brother extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brother: this.props.brother
    };
  }

  render() {
    return (
      <div>
        <img src={this.state.brother.img} alt={this.state.name} className={"popupImage"}/>

        <div className="brotherInfo">
          <h2 align = "center">{this.state.brother.name}</h2>
          <p>Class of {this.state.brother.year}</p>
          <p>{this.state.brother.hometown}</p>
          <p>Studying: {this.state.brother.major}</p>
        </div>
        <div className={"quote"}>
          <p>"{'\t'}{this.state.brother.bio}
            {'\t'}"</p>
        </div>
      </div>
    );
  }
}

export default Brother

