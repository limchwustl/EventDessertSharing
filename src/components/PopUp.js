import React from 'react'

const PopUp = (props) => {
  return (props.trigger && props.text) ? (
    <div>{props.text}</div>
    
  )
    
  : "";
}

export default PopUp