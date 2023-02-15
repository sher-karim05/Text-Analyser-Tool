import React from 'react'

function Alert(props) {
    const captalize = (word) =>{
        const lower = word.toLowerCase();
        return lower.slice(lower.length-1).toUpperCase() + lower.slice(1)
    }
  return (
props.alert &&<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{captalize(props.alert.type)}</strong>:{props.alert.msg}
    </div>
  )
}

export default Alert
