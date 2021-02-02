import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './nells-app.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonAppBar from './Components/ButtonAppBar';
import About from './Pages/About';
import Home from "./Pages/Home";
import Works from './Pages/Works';

function App() {
  return (
    <>
      <BrowserRouter>
        <ButtonAppBar />
          <Switch> 
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/works">
                <Works />
              </Route>
          </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;