import React, { useState, useEffect } from "react";
import "../../../../styles/social_media/custom.scss";
import "../../../../styles/styleGuide.scss";

function SocialHomeNews(props) {
  return (
    <>
      <div className="container-fluid socialNewsMain">
        <div className="row socialNewsItems">
          <div className="row socailNewsTop d-flex">
            <div className="socailHomeNewsTitile enHeader3">News</div>
            <div className="newsScrollingItems">
              <div>話題</div>
              <div>活動</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SocialHomeNews;
