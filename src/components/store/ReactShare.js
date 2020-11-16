import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
// import "./styles.css";
import { LineShareButton, TwitterShareButton } from "react-share";
import { LineIcon, TwitterIcon } from "react-share";

function ReactShare(props){
  return (
      <>
    <div className="App">
      <LineShareButton
        url={"http://localhost:3000/ChatRoom"}
        quote={"test"}
        hashtag={"#毛毛"}
        description={"test啦"}
        className="Demo__some-network__share-button"
      >
        <LineIcon size={32} round />
      </LineShareButton>
      <br />
      <TwitterShareButton
        title={"test"}
        url={"http://localhost:3000/ChatRoom"}
        hashtags={["hashtag1", "hashtag2"]}
      >
        <TwitterIcon size={32} round />
        
      </TwitterShareButton>
    </div>
    </>
    )
};

const mapStateToProps = (store) => {
    return {}
  }
const mapDispatchToProps = null
  
 export default connect(mapStateToProps, {})(ReactShare);