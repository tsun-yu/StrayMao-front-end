import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import SocialForum from "./SocialForum";
import SocialHomepage from "./SocialHomepage";
import AddForumCard from "./AddForumCard";

function Test(props) {
  return (
    <>
      {/* <SocialHomepage /> */}
      <SocialForum />
    </>
  );
}

const mapStateToProps = (store) => {
  return {};
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {})(Test);
