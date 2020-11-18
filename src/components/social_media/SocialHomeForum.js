import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ForumListCard from "./ForumListCard";
import ForumHomeCardPagebar from "./ForumHomeCardPagebar";
import { getForumListAsync } from "../../actions/social_media/index";
import { gotoPage, setTotalPage,setArticleTotalPage, } from '../../actions/common/index';
import { withRouter, useHistory } from "react-router-dom";

function SocialHomeforum(props) {
  const [display, setDisplay] = useState(<></>);
  const content=[];

  let totalCards = props.info;
  let totalPages = Math.ceil(totalCards.length / 4);
  let nowPage = props.nowPage;

  useEffect(() => {
    props.getForumListAsync();
  }, [])

  useEffect(() => {
    let totalCards = props.info;
    let totalPages = Math.ceil(totalCards.length / 4);
    if(totalCards.length > 0) {
      props.setTotalPage(totalPages);
      
      for (let i = 4 * (nowPage - 1);nowPage === totalPages ? i < totalCards.length : i < 4 * nowPage;
        i++
      ) {
        if (totalCards.length > 0) {
          console.log(":", totalCards[i]);
          content.push(<ForumListCard test={totalCards[i]} i={i} />);
        }
      }   
    }

  setDisplay(content);
},[props.info,nowPage]);


  return (
    <>
      <div className="container d-flex socialforumMain" id="socialforumMain">
        <div className="row socialforumItems no-gutters">
          <div className="container socialforumMainItems">
            <div className="socialforumTop">
              <div className="header4">話題</div>
              <div className="socialforumTextBox">
                <span className="socialforumText">
                  大家都在討論什麼，都能在這裡找到。
                </span>
              </div>
            </div>
            <div className="row socialforumCardItems no-gutters">
            {display}
            </div>
            <div className="row socialforumBottom no-gutters">
              <div className="socialforumBottomline" />
              <button
                className="socialforumBottomBtn btn-green"
                type="button"
                value="加入討論"
                onClick={() => {
                    console.log(props)
                    props.history.push('/socialForum');
                  }}
              >
                加入討論
              </button>
              <div className="socialforumBottomline" />
            </div>
          </div>
          <ForumHomeCardPagebar />
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (store) => {
  return { 
    info: store.socialReducer.getForumList,
    nowPage: store.nowPage,
    totalPage: store.totalPage,};
};
const mapDispatchToProps = null;

export default withRouter(
  connect(mapStateToProps, {
    getForumListAsync,
    gotoPage,
    setTotalPage,
  })(SocialHomeforum)
);
