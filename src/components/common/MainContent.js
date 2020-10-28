import React from "react";
import "../../styles/custom.scss";

function MainContent(props) {
  return (
    <>
      <main className="flex-shrink-0">
        {/* props.children代表嵌入在其中的元件或資料內容 */}
        <div className="container">
          {props.children}
          <div className="header1">標題一請自取</div>
          <div className="header2">標題二請自取</div>
          <div className="header3">標題三請自取</div>
          <div className="header4">標題四請自取</div>
          <div className="header5">標題五請自取</div>
          <div className="header6">標題六請自取</div>
          <div className="header7">標題七請自取</div>
          <div className="paragraph1">內文一請自取</div>
          <div className="paragraph2">內文二請自取</div>
          <div className="caption">說明文字請自取</div>
          <div className="enHeader1">StrayMao Here</div>
          <div className="enHeader2">StrayMao Here</div>
          <div className="enHeader3">StrayMao Here</div>
          <div className="enHeader4">StrayMao Here</div>
          <div className="enHeader5">StrayMao Here</div>
          <div className="enHeader6">StrayMao Here</div>
          <div className="enParagraph">StrayMao Here</div>
        </div>
      </main>
    </>
  );
}

export default MainContent;
