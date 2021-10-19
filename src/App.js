import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Header from "./Components/Header";
import Note from "./Pages/Note";
import Notes from "./Pages/Notes";

function App() {
  return (
    <Router>
      <div className="Container">
        <div className="app">
          <Header />
          <Switch>
            <Route path="/" exact component={Notes} />
            <Route path="/note/:id" component={Note} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
