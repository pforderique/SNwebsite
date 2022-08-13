import React, { useState } from 'react'
import PopUp from '../pages/popup'

import "./brother.scss"


const permissions = {
  CAN_SHOW_LASTNAME: ['Diego Arenas'],
  CAN_SHOW_HOMETOWN: [
    'Jason Garcia', 'Hector Martinez', 'Juan Antonio Luera', 'Diego Arenas'
  ],
  CAN_SHOW_EMAIL: ['Diego Arenas'],
}

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
          {/* NOTE: Last name excluded for privacy reasons. */}
          {permissions.CAN_SHOW_LASTNAME.includes(props.brother.name) ?
            <button align = "center">{props.brother.name}</button>
          : <button align = "center">{props.brother.name.split(' ')[0]}</button>}
        </div>
        {seen && <PopUp
          toggle={togglePop}
          className={seen ? null : "invisible"}
          brother={props.brother}
          permissions={permissions}
        />}
      </div>
      {props.includeRole ? 
        <h3>{props.brother.role}</h3> : 
        (
          <>
            <p>Major(s): {props.brother.major}</p>
            {/* NOTE: Hometown city excluded for privacy reasons. */}
            {
              permissions.CAN_SHOW_HOMETOWN.includes(props.brother.name) ? 
                <h5>{props.brother.hometown}</h5>
              : <h5>{'Home state: ' + props.brother.hometown.split(', ')[1]}</h5>
            }
          </>
        )
      }
      </div>
  );
}

export default Brother