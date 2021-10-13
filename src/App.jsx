import TennisDeportivos from 'components/TennisDeportivos';
import Index from 'pages';
import TennisBlancos from 'pages/TennisBlancos';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './styles/styles.css';


function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
              <Route path="/TennisWhite">
                <TennisBlancos/>
                </Route>
            <Route path="/">
              <Index />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}
export default App;
