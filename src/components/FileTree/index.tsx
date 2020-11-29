import React from "react";
import "./index.css";

type files = Array<{
  path: string;
  name: string;
  children: files;
}>;

interface Props {
  files: Array<{
    path: string;
    name: string;
    children: files;
  }>;
  handleFileSelect: (path: string) => void;
}

class FileTree extends React.Component<Props> {
  constructor(Props: Props) {
    super(Props);
  }

  renderFileTreeRecursively = (children: files) => {
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
