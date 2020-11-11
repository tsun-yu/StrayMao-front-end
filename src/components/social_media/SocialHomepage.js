import React, { useState, useEffect } from "react";
import SocialHomeTop from "./SocialHomeTop";
import SocialHomeNews from "./SocialHomeNews";
import SocialHomeRank from "./SocialHomeRank";
import SocialHomeforum from "./SocialHomeForum";
import SocialHomeArticle from "./SocialHomeArticle";
import SocialHomeActivity from "./SocialHomeActivity";
import { connect } from "react-redux";

function SocialHomepage(props) {
  return (
    <>
      <SocialHomeTop />
      <SocialHomeNews />
      <SocialHomeRank />
      <SocialHomeforum />
      <SocialHomeArticle />
      <SocialHomeActivity />
    </>
  );
}

const mapStateToProps = (store) => {
  return {
  };
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {})(SocialHomepage);
