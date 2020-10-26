import React from "react";
import "../../styles/custom.scss";

function MainContent(props) {
  return (
    <>
      <main className="flex-shrink-0">
        {/* props.children代表嵌入在其中的元件或資料內容 */}
        <div className="container">
          {props.children}
          <div className="Header1">標題一請自取</div>
          <div className="Header2">標題二請自取</div>
          <div className="Header3">標題三請自取</div>
          <div className="Header4">標題四請自取</div>
          <div className="Header5">標題五請自取</div>
          <div className="Header6">標題六請自取</div>
          <div className="Header7">標題七請自取</div>
          <div className="Paragraph1">內文一請自取</div>
          <div className="Paragraph2">內文二請自取</div>
          <div className="caption">說明文字請自取</div>
        </div>
      </main>
    </>
  );
}

export default MainContent;
