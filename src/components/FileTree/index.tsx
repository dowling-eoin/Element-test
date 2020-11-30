import React from "react";
import "./index.css";
import { TreeList } from "../../typings";
import FileType from "./FileType";
import FileName from "./FileName";

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

  render() {
    return (
      <div className="FileTree">
        {this.props.files.map((fileType, index) => (
          <div key={index}>
            <FileName
              key={fileType.name}
              name={fileType.name}
              path={fileType.path}
              handleFileSelect={this.props.handleFileSelect}
            />
            <FileType
              key={fileType.path}
              name={fileType.name}
              path={fileType.path}
              files={fileType.children}
              handleFileSelect={this.props.handleFileSelect}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default FileTree;
