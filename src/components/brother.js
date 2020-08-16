import React from 'react'
import "./brother.scss"
import PopUp from '../pages/popup'


class Brother extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brother: this.props.brother,
      seen: false
    };
  }

  togglePop = () => {
    this.setState({
      seen: !this.state.seen
    });
  };

  render() {
    return (
    <div className={"brother"}>
      <img src={this.state.brother.img} alt={this.state.name} className={"brotherImage"}/>
      <div>
        <div className="btn popupButton" onClick={this.togglePop}>
          <button>{this.state.brother.name}</button>
        </div>
        {this.state.seen ? <PopUp toggle={this.togglePop}
                                  className={this.state.seen ? null : "invisible"}
                                  img={this.props.brother.img}
                                  name={this.props.brother.name}
                                  year={this.props.brother.year}
                                  hometown={this.props.brother.hometown}
                                  major={this.props.brother.major}
                                  bio={this.props.brother.bio}
        />: null}
      </div>
      <p>{this.state.brother.major}</p>
      <h4>{this.state.brother.hometown}</h4>
    </div>
    );
  }
}

export default Brother

