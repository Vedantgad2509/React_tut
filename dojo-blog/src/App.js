
import Navbar from './Navbar';
import Home from './Home';
import Create from './create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './BlogDetails';

function App() {
  const title='App Component'
  // const likes=50
  // const link="http://www.google.com";
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/"> 
              <Home/>
            </Route>
            <Route path='/create'>
              <Create/>
            </Route> 
            <Route path='/blogs/:id'>
              <BlogDetails/>
            </Route>  
          
          </Switch>
          {/* <p>liked by {likes}</p>

          <p>{"hello"}</p>
          <p>[1,2,3]</p>
          <a href={link}>Google site</a> */}

        </div>
      
      </div>
   </Router>
  );
}

export default App;
