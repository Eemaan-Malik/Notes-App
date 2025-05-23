import React from "react";
import ReactMde from "react-mde";
import Showdown from "showdown";
import "./index.css"

export default function Editor({ tempNoteText, setTempNoteText, updateNote }) {
  const [selectedTab, setSelectedTab] = React.useState("write");

  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
  });

  function handleTextChange(newText) {
    setTempNoteText(newText);
    updateNote(newText);  
  }

  return (
    <section className="pane editor">
      <ReactMde
        value={tempNoteText}
        onChange={handleTextChange} 
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(converter.makeHtml(markdown))
        }
        minEditorHeight={80}
        heightUnits="vh"
      />
    </section>
  );
}
