import React from "react";
import "./index.css";
import FileTree from "../FileTree";
import FileContent from "../FileContent";
import fileFixtures from "../../fixtures/files.json";

interface Props {
  file: string;
}

class App extends React.Component {
  constructor(Props) {
    super(Props);
    this.state = {
      tree: [],
      content: [],
      selected: "",
    };
  }
    handleSelection = (path) => {
        console.log(path);
        this.setState({ selected: path });
        // eventBus.dispatch("itemSelected", { message: "item selected" });
    };

  //const App: React.FC<Props> = () => {
  // console.log("The file fixtures are here!", fileFixtures);
  checker = (files) => {
    let paths = [];
    let tree = {};

    files.forEach((file, index) => {
      const path = file.path;
      paths.push(path);
    });

    // Insert path into directory tree structure:
    const insert = (pathIndex, children = [], [head, ...tail]) => {
       // let fullPath = [head, ...tail];
      let child = children.find((child) => child.name === head);
      if (!child) children.push((child = { path: paths[pathIndex], name: head, children: [] }));
      if (tail.length > 0) insert(pathIndex, child.children, tail);
      return children;
    };

    //const fullPaths = paths;
      //let bink;
    tree = paths
      .map((path) => {let bink = path; return path.split("/").slice(1)})
      .reduce((children, path, index) => insert(index, children, path), []);

    const addPath = (tree) => {
       // console.log(tree);
        let path = [];
        tree.forEach((branch)=> {
            if (branch.children.length > 0) {
                path.push(branch.name);
                addPath(branch.children);
            }else{
              //  console.log(path);
                path.push(branch.name);
            }
        });
    };

   addPath(tree);
    console.log(tree);

    this.setState({ tree: tree });
  };

  getContent = (files) => {
    const content = [];

    files.forEach((file, index) => {
      content.push({ path: file.path, content: file.content });
    });

    console.log(content);

    this.setState({ content: content });
  };

  componentDidMount() {
    this.checker(fileFixtures);
    this.getContent(fileFixtures);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">ElementAI Frontend Challenge</header>
        <div className="App-content">
          <FileTree files={this.state.tree} handleSelection={this.handleSelection}/>
          <FileContent content={this.state.content} selected={this.state.selected}/>
        </div>
      </div>
    );
  }
}

export default App;
