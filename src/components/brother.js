import React, { useState } from 'react'
import "./brother.scss"
import PopUp from '../pages/popup'

const Brother = (props) => {

  const [seen, setSeen] = useState(false);

  const togglePop = () => {
    setSeen(!seen);
  };

  return (
    <div className={"brother"}>
      <img src={props.brother.img} key={props.brother.img} alt={props.brother.name} className={"brotherImage"}/>
      <div>
        <div className="btn popupButton" onClick={togglePop}>
          <button><a href={"mailto:"+props.brother.kerb+"@mit.edu"}>{props.brother.name}</a></button>
        </div>
        {/* {state.seen && props.modal ? <PopUp toggle={togglePop}
                                  className={state.seen ? null : "invisible"}
                                  img={ brotherDict[props.brother.img]}
                                  name={props.brother.name}
                                  year={props.brother.year}
                                  hometown={props.brother.hometown}
                                  major={props.brother.major}
                                  minor={props.brother.minor}
                                  bio={props.brother.bio}
        />: null} */}
      </div>
      <p>{props.brother.major}</p>
      <h4>{props.brother.hometown}</h4>
      {props.modal ? null : <h4>{props.brother.title}</h4> }
    </div>
  );
}

export default Brother

