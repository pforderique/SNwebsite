import React, { Component } from "react";
import './popup.scss';


class PopUp extends Component {
  handleClick = () => {
    this.props.toggle();
  };
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <div className="modal" onClick={this.handleClick}>
          <div className="modal_content" >
            <div className={'popupImageQuote'}>
              <img src={this.props.img}  className={"popupImage"}/>
              <div className="brotherInfo">
                <h2 align = "center">{this.props.name}</h2>
                <p>Class of {this.props.year}</p>
                <p>{this.props.hometown}</p>
                <p>{this.props.major}</p>
                {this.props.minor?<p>{'Minoring in ' + this.props.minor}</p>:null}
              </div>
            </div>
            <div className={"quote"}>
              <p>{'\t'}{this.props.bio}
                {'\t'}</p>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default PopUp;