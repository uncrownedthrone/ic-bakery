import React from 'react'

const TestComponent = props => {
  console.log(props)
  return <h1>Hello. You are on the {props.match.params.category} page!!!</h1>
}

export default TestComponent
