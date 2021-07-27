import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "528586922343-gccg6o3em1idgljn1f3gr38s4dl5js20.apps.googleusercontent.com",
        scope: "email",
      });
    });
  }
  render() {
    return <div>GA</div>;
  }
}
export default GoogleAuth;
