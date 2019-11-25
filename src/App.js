import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
// import PiePage from './components/PiePage'
// import CookiePage from './components/CookiesPage'
// import CakePage from './components/CakePage'
// import TestComponent from './components/TestComponent'
import NavBar from './components/NavBar'
import BakedGoodsPage from './components/BakedGoodsPage'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/:category' component={BakedGoodsPage}></Route>
          {/* <Route exact path='/test/:category' component={TestComponent}></Route>
          <Route exact path='/pies' component={PiePage}></Route>
          <Route exact path='/cakes' component={CakePage}></Route>
          <Route exact path='/cookies' component={CookiePage}></Route> */}
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
