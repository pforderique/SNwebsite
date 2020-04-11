import React from 'react'


class Brother extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: null,
      name: null,
    };
  }

  renderBrotherImage(img, name){
    return <img src={img} alt={name} className={"officer"}/>;
  }

  render() {
    return (
    <div className={"brother"}>
        <div>
            renderBrotherImage(img, name)
            <p>this.state.name</p>
        </div>
    </div>
    );
  }
}

export default Brother