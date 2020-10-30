import React, { useState, useEffect } from "react";
import SocialHomeTop from "../commponents/SocialHomepage/SocialHomeTop";
import SocialHomeNews from "../commponents/SocialHomepage/SocialHomeNews";
import SocialHomeRank from "../commponents/SocialHomepage/SocialHomeRank";
import SocialHomeFourm from "../commponents/SocialHomepage/SocialHomeFourm";
import SocialHomeArticle from "../commponents/SocialHomepage/SocialHomeArticle";
import SocialHomeActivity from "../commponents/SocialHomepage/SocialHomeActivity";

function SocialHomepage(props) {
  return (
    <>
      <SocialHomeTop />
      <SocialHomeNews />
      <SocialHomeRank />
      <SocialHomeFourm />
      <SocialHomeArticle />
      <SocialHomeActivity />
    </>
  );
}

export default SocialHomepage;
