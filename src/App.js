import './App.css'

import {Switch, Route} from 'react-router-dom'

import Header from './components/Header'

import Home from './components/Home'

import NotFound from './components/NotFound'

import Contact from './components/Contact'

import About from './components/About'

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route component={NotFound} />{' '}
    </Switch>
  </div>
)

export default App
