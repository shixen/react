import React from 'react'

function UserData(props) {
  return (
    <div>
        <h1>{props.state.isLoaded ? "Data loaded!" : "Loading..."}</h1>
    </div>
  )
}

export default UserData