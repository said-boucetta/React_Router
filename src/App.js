import Popular from "./component/Popular";
import Top from "./component/Top";
import Description from "./component/Description";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <button style={{ color: "blue", fontSize: 25 }}>
            <Link to="/popular">popular</Link>
          </button>
          <button style={{ color: "blue", fontSize: 25 }}>
            <Link to="/top">top</Link>
          </button>
        </nav>
        <Switch>
          <Route exact path="/popular">
            <Popular />
          </Route>
          <Route exact path="/top">
            <Top />
          </Route>
          <Route exact path="/details/:name">
            <Description />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
