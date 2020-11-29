import React from "react";
import "./index.css";

interface Props {
  fileContent: Array<{
    path: string;
    content: string;
  }>;
  selected: string;
}

const FileContent: React.FC<Props> = ({ fileContent, selected }: Props) => {
  const showContent = (selected) => {
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
