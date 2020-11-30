import React from "react";
import "./index.css";
import FileTree from "../FileTree";
import FileContent from "../FileContent";
import fileFixtures from "../../fixtures/files.json";
import { TreeList, Files, Content } from "../../typings";

interface IProps {
  [n: string]: never;
}

interface IState {
  fileTree: Array<{
    path: string;
    name: string;
    children: IState["fileTree"];
  }>;
  content: Array<{
    path: string;
    content: string;
  }>;
  selected: string;
}

class App extends React.Component<IProps, IState> {
  constructor(Props: IProps) {
    super(Props);
    this.state = {
      fileTree: [],
      content: [],
      selected: "",
    };
  }

  handleFileSelect = (path: string) => {
    this.setState({ selected: path });
    return;
  };

  // console.log("The file fixtures are here!", fileFixtures);
  createFileTree = (files: Files) => {
    const paths: string[] = [];
    // let fileTree: TreeList = [];

    files.forEach((file) => {
      paths.push(file.path);
    });

    // Insert path into directory tree structure:
    const insert = (
      pathIndex: number,
      children: TreeList = [],
      [head, ...tail]: string[]
    ) => {
      let child = children.find((child) => child.name === head);
      if (!child)
        children.push(
          (child = { path: paths[pathIndex], name: head, children: [] })
        );
      if (tail.length > 0) insert(pathIndex, child.children, tail);
      return children;
    };

    const fileTree = paths
      .map((path) => path.split("/").slice(1))
      .reduce(
        (children: TreeList, path, index) => insert(index, children, path),
        []
      );

    const addPath = (fileTree: TreeList) => {
      const path = [];
      fileTree.forEach((branch) => {
        if (branch.children.length > 0) {
          path.push(branch.name);
          addPath(branch.children);
        } else {
          path.push(branch.name);
        }
      });
    };

    addPath(fileTree);

    //Add File Tree object to local state
    this.setState({ fileTree: fileTree });
  };

  getFileContent = (files: Files) => {
    const content: Content = [];

    files.forEach((file) => {
      content.push({ path: file.path, content: file.content });
    });

    this.setState({ content: content });
  };

  componentDidMount() {
    this.createFileTree(fileFixtures);
    this.getFileContent(fileFixtures);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">ElementAI Frontend Challenge</header>
        <div className="App-content">
          <FileTree
            files={this.state.fileTree}
            handleFileSelect={this.handleFileSelect}
          />
          <FileContent
            fileContent={this.state.content}
            selected={this.state.selected}
          />
        </div>
      </div>
    );
  }
}

export default App;
