import React from "react";
import "./index.css";
import { TreeList } from "../../../typings";
import File from "../File";

interface IProps {
  name: string;
  path: string;
  files: Array<{
    path: string;
    name: string;
    children: TreeList;
  }>;
  handleFileSelect: (path: string) => void;
}

class FileType extends React.Component<IProps> {
  constructor(Props: IProps) {
    super(Props);
  }

  render() {
    return (
      <ul className="FileType">
        {this.props.files.map((branch, index) => (
          <li key={index}>
            <File
              key={branch.path}
              name={branch.name}
              path={branch.path}
              handleFileSelect={this.props.handleFileSelect}
            />
            {branch.children.length < 1 ? null : (
              <FileType
                key={branch.name}
                name={branch.name}
                path={branch.path}
                files={branch.children}
                handleFileSelect={this.props.handleFileSelect}
              />
            )}
          </li>
        ))}
      </ul>
    );
  }
}

export default FileType;
