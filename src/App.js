import Footer from './components/Footer';
import Header from './components/Header';
import {Route, Switch} from 'react-router-dom'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';
import Category from './components/pages/Category';
import Recipe from './components/pages/Recipe';

function App() {
  return (
    <div>
      <Header/>
      <main className='content container'>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/contacts' component={Contact}/>
          <Route path='/category/:name' component={ Category }/>
          <Route path='/meal/:id' component={ Recipe }/>
          <Route component={NotFound}/>  
        </Switch>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
