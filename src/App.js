import React from "react"
import Home from "./Home"
import { Route, Switch } from "react-router"
import Contact from "./Pages/Contact"
import About from "./Pages/About"
import Services from "./Pages/Services"
import Error from './Pages/Error'


const App = () => {
  return (
    <> <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/contact" component={Contact}></Route>
      <Route path="/services" component={Services}></Route>
      <Route path="*" component={Error}></Route>
      
    </Switch>
    </>
  )
}

export default App
