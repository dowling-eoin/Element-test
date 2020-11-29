import React from "react";
import "./index.css";

interface IProps {
  fileContent: Array<{
    path: string;
    content: string;
  }>;
  selected: string;
}

const FileContent: React.FC<IProps> = ({ fileContent, selected }: IProps) => {
  const showContent = (selected: IProps["selected"]) => {
    let selectedContent;
    fileContent.forEach((fileContent) => {
      if (fileContent.path === selected) {
        selectedContent = fileContent.content;
      }
    });
    return selectedContent;
  };

  return (
    <div className="FileContent">
      <p>{showContent(selected)}</p>
    </div>
  );
};

export default FileContent;
