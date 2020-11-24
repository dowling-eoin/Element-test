import React from "react";
import "./index.css";

type Props = {};

const FileContent: React.FC<Props> = (_) => {
  return (
    <div className="FileContent">
      Implement your FileContent component here. This component should present
      the content of the file that was selected from the file tree.
    </div>
  );
};

export default FileContent;
