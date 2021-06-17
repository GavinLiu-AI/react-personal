import './App.css';
import Main from "./components/main/main";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/'>
          <Main />
        </Route>
      </Router>
    </div>
  );
}

export default App;
