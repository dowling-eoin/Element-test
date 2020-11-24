import React from "react";
import "./index.css";
import FileTree from "../FileTree";
import FileContent from "../FileContent";
import fileFixtures from "../../fixtures/files.json";

type Props = {};

const App: React.FC<Props> = (_) => {
  console.log("The file fixtures are here!", fileFixtures);

  return (
    <div className="App">
      <header className="App-header">ElementAI Frontend Challenge</header>
      <div className="App-content">
        <FileTree />
        <FileContent />
      </div>
    </div>
  );
};

export default App;
