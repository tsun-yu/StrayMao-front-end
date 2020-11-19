import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ForumNewsFive from "./ForumNewsFive"
import ForumHotFive from "./ForumHotFive"
import {
  getNewFiveAsync,getHotFiveAsync,
} from "../../actions/social_media/index";

function ForumNewsMain(props) {
  const [newDisplay,setNewDisplay]=useState(<></>)
  const [hotDisplay,setHotDisplay]=useState(<></>)
  const newContent =[];
  const hotContent =[];

  useEffect(() => {
    props.getNewFiveAsync();
    props.getHotFiveAsync();
  }, [])

  useEffect(() => {
    let totalNews = props.new
    if (totalNews.length > 0) {
      console.log(props.new);
      for (let i = 0; i < totalNews.length; i++) {
        newContent.push(
          <ForumNewsFive new={totalNews[i]}/>
        );
      }
  } 
  setNewDisplay(newContent)
}, [props.new])

useEffect(() => {
  let totalHot = props.hot
  if (totalHot.length > 0) {
    console.log(props.hot);
    for (let i = 0; i < totalHot.length; i++) {
      hotContent.push(
        <ForumHotFive hot={totalHot[i]}/>
      );
    }
} 
setHotDisplay(hotContent)
}, [props.hot])



  return (
    <div className="container forumNewsMain">
      <div className="forumNewsBT">
        <div className="row forumNewsTitle">
          <sapn className="forumTitleLine"></sapn>
          <h3 className="enHeader5">News</h3>
          <sapn className="forumTitleLine"></sapn>
        </div>
      </div>
      <div className="forum_NewsItems">
      <div className="newsFiveBox">
      <marquee STRONG id="affiche" align="middle" behavior="scroll" direction="up" height="100" width="600" vspace="20" loop="-1" scrollamount="10" scrolldelay="200" onMouseOut="this.start()" onMouseOver="this.stop()">
      {hotDisplay}
      </marquee>
      </div>
      </div>
      <div className="forum_NewsItems">
      <div className="newsFiveBox">
      <marquee STRONG id="affiche" align="middle" behavior="scroll" direction="up" height="100" width="600" vspace="20" loop="-1" scrollamount="14" scrolldelay="200" onMouseOut="this.start()" onMouseOver="this.stop()">
      {newDisplay}
      </marquee>
      </div>
      </div>
      <div className="forumNewsLineBetween" />
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    new: store.socialReducer.getNewFive,
    hot: store.socialReducer.getHotFive,
  };
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {
  getNewFiveAsync,
  getHotFiveAsync,
})(ForumNewsMain);

