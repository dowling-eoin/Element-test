import React from "react";
import "./index.css";
import {TreeList} from "../../typings";


interface IProps {
  files: Array<{
    path: string;
    name: string;
    children: TreeList;
  }>;
  handleFileSelect: (path: string) => void;
}

class FileTree extends React.Component<IProps> {
  constructor(Props: IProps) {
    super(Props);
  }

  renderFileTreeRecursively = (children: TreeList) => {
    return children.map((child, index) => (
      <ul key={index}>
        <li
          key={child.name}
          onClick={() => this.props.handleFileSelect(child.path)}
        >
          {child.name}
        </li>
        {child.children.length < 1
          ? null
          : this.renderFileTreeRecursively(child.children)}
      </ul>
    ));
  };

  render() {
    return (
      <div className="FileTree">
        {this.props.files.map((branch, index) => (
          <ul key={index}>
            <li
              key={branch.name}
              onClick={() => this.props.handleFileSelect(branch.path)}
            >
              {branch.name}
            </li>
            {this.renderFileTreeRecursively(branch.children)}
          </ul>
        ))}
      </div>
    );
  }
}

export default FileTree;
