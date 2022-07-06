import React from "react";
import Page from "./components/Page";

class App extends React.Component {
  render() {
    return (
      <div className="flex justify-center h-full bg-gray-700 overflow-y-hidden">
        <Page></Page>
      </div>
    );
  }
}

export default App;
