import React from "react";
import "./index.css";

interface Props {
  content: Array<{
    path: string;
    content: string;
  }>;
  selected: string;
}



const FileContent: React.FC<Props> = ({ content, selected }) => {
    const showContent = (selected) => {
        let selectedContent;
       content.forEach((content)=>{
           if(content.path === selected){
               selectedContent = content.content;
           }
       });
       console.log(selectedContent);
        return selectedContent;
    };
  return (
    <div className="FileContent">
        <p>{showContent(selected)}</p>
    </div>
  );
};

export default FileContent;
