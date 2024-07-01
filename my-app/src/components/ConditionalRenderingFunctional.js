import React from 'react'

function ConditionalRenderingFunctional(props) {
  return (
    <div>
        <h1>{props.connected ? 'connected' : 'Not connected'}</h1>
    </div>
  )
}

export default ConditionalRenderingFunctional