import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

function ForumNewFive(props) {

  return (
   <>
   <div className="row no-gutters newFiveItems">
   <p className="forumNewTitle">NEW</p>
   <span className="forumNewColor">
   {props.new.talkTitle}
   </span>
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
})(ForumNewFive);

