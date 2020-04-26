import React from 'react';

export const MyCoolButton = props  => {

    const clickHandler = (c)  => alert("Comment: " + c);
    return (
      <div>
         <span>{props.name}</span>
         <input className="MyCoolButton" onClick={() => clickHandler(props.comment)} type="button" value={props.text ? props.text : 'click me'}/>
      </div>
    );
  };