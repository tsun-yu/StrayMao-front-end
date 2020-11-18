import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

function ForumHotFive(props) {

  return (
   <>
   <div className="row no-gutters newFiveItems">
    <p className="forumHotTitle">HOT</p>
    {props.hot.talkTitle}
   </div>
   </>
  );
}

const mapStateToProps = (store) => {
  return {

  };
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {
})(ForumHotFive);

