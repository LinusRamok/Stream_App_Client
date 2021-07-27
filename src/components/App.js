import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import StreamEdit from "./streams/StreamEdit";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/stream/new" component={StreamCreate} />
            <Route path="/stream/edit" component={StreamEdit} />
            <Route path="/stream/show" component={StreamShow} />
            <Route path="/stream/delete" component={StreamDelete} />
            <Route path="/" exact component={StreamList} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
