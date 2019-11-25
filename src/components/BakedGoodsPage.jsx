import React from 'react'

const BakedGoodsPage = props => {
  return <h1>Hello. You are on the {props.match.params.category} page!!!</h1>
}

export default BakedGoodsPage
