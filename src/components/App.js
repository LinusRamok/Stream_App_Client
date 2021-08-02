import React from "react";
import { Router, Route } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import StreamEdit from "./streams/StreamEdit";
import Header from "./Header";
import history from "../history";

//528586922343-gccg6o3em1idgljn1f3gr38s4dl5js20.apps.googleusercontent.com
class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <div>
            <Header />

            <Route path="/stream/new" component={StreamCreate} />
            <Route path="/stream/edit" component={StreamEdit} />
            <Route path="/stream/show" component={StreamShow} />
            <Route path="/stream/delete" component={StreamDelete} />
            <Route path="/" exact component={StreamList} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
