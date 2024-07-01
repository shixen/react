import React from 'react'

function EventsFunctional() {
    function clickHandler(){
        console.log("clicked functional button")
    }
  return (
    <button onClick={clickHandler}>click me - functional Component</button>
  )
}

export default EventsFunctional