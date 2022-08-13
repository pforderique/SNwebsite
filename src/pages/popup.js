import React, { Component } from "react";
import './popup.scss';


class PopUp extends Component {

  render() {
    if (!this.props.brother) return <>Loading...</>
    return (
      <div>
        <div className="modal" onClick={this.props.toggle}>
          <div className="modal_content" >
            <div className={'popupImageQuote'}>
              <img src={this.props.brother.img}  className={"popupImage"}/>
              <div className="brotherInfo">
                {/* NOTE: last name excluded for privacy reasons. */}
                {this.props.permissions.CAN_SHOW_LASTNAME.includes(this.props.brother.name) ?
                  <h2 align = "center">{this.props.brother.name}</h2>
                : <h2 align = "center">{this.props.brother.name.split(' ')[0]}</h2>}
                <p>Class of {this.props.brother.year}</p>
                {/* NOTE: Hometown city excluded for privacy reasons. */}
                {this.props.permissions.CAN_SHOW_HOMETOWN.includes(this.props.brother.name) ? 
                  <p>{this.props.brother.hometown}</p>
                : <p>{'Home state: ' + this.props.brother.hometown.split(', ')[1]}</p>}
                <p>Studying course(s): {this.props.brother.major}</p>
                {/* NOTE: Email excluded for privacy reasons. */}
                {this.props.permissions.CAN_SHOW_EMAIL.includes(this.props.brother.name) && 
                  <p>{'Contact: '} 
                    <a href={"mailto:" + this.props.brother.kerb + "@mit.edu"}>
                      {this.props.brother.kerb + '@mit.edu'}
                    </a>
                    {' '}<i class="fa fa-envelope"></i>
                  </p>}
              </div>
            </div>
            <div className={"quote"}>
              {
                this.props.brother.bio && 
                <>
                  <h4>About:</h4>
                  <p>{this.props.brother.bio}</p>
                </>
              }
              {
                this.props.brother.funMemoryWithAnotherBrother && 
                <>
                  <h4>Favorite Memory w/ SN:</h4>
                  <p>{this.props.brother.funMemoryWithAnotherBrother}</p>
                </>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PopUp;