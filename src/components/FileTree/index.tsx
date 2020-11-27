import React from "react";
import "./index.css";

interface Props {
  files: Array<{
    path: string;
    content: number;
    createdAt: string;
    updatedAt: string;
  }>;
  handleSelection: (path: string) => void;
}

class FileTree extends React.Component {
  constructor(Props) {
    super(Props);
    this.state = {
      //  tree: [],
    };
  }



  renderChildrenRecursively = (children) => {
    return children.map((child, index) => (
      <ul key={index}>
        <li key={child.name} onClick={()=>this.props.handleSelection(child.path)}>{child.name}</li>
        {child.children < 1
          ? null
          : this.renderChildrenRecursively(child.children)}
      </ul>
    ));
  };


  render() {
    return (
      <div className="FileTree">
        Implement your FileTree component here.
        {this.props.files.map((branch, index) => (
          <ul key={index}>
            <li key={branch.name} onClick={()=>this.props.handleSelection(branch.path)}>{branch.name}</li>
            {this.renderChildrenRecursively(branch.children)}
          </ul>
        ))}
      </div>
    );
  }
}

export default FileTree;
