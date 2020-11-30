import React from "react";
import "./index.css";

interface IProps {
  path: string;
  name: string;
  handleFileSelect: (path: string) => void;
}

class FileName extends React.Component<IProps> {
  constructor(Props: IProps) {
    super(Props);
  }

  render() {
    return (
      <h3
        className={"FileName"}
        onClick={() => this.props.handleFileSelect(this.props.path)}
      >
        {this.props.name}
      </h3>
    );
  }
}

export default FileName;
