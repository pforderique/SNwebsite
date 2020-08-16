import React, { Component } from "react";
import './popup.scss';
export default class PopUp extends Component {
  handleClick = () => {
    this.props.toggle();
  };
  constructor(props) {
    super(props);
    this.state = {
      brother: this.props.brother
    };
  }
  render() {
    return (
      <div>
        <div className="modal" onClick={this.handleClick}>
          <div className="modal_content" >
            <div className={'popupImageQuote'}>
              <img src={this.state.brother.img}  className={"popupImage"}/>
              <div className="brotherInfo">
                <h2 align = "center">{this.state.brother.name}</h2>
                <p>Class of {this.state.brother.year}</p>
                <p>{this.state.brother.hometown}</p>
                <p>{this.state.brother.major}</p>
              </div>
            </div>
            <div className={"quote"}>
              <p>"{'\t'}{this.state.brother.bio}
                {'\t'}"</p>
            </div>

          </div>
        </div>
      </div>
    );
  }
}