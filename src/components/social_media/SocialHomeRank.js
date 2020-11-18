import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  getForumHotAsync,
} from "../../actions/social_media/index";

function SocialHomeRank(props) {
  const [one,setOne]=useState({createAt:[0,0,0]})
  const [two,setTwo]=useState({createAt:[0,0,0]})
  const [three,setThree]=useState({createAt:[0,0,0]})
  const [flag,setFlag]=useState(0)
  const [asTypeId,setAsTypeId]=useState(<></>)


  function show(event){
    document.getElementById("rankTypeItems").value = event.target.value;
    console.log(document.getElementById("rankTypeItems").value)
    setAsTypeId(event.target.value)
    setFlag(1)
  }


  useEffect(() => {
    props.getForumHotAsync();
    console.log("props:")

  },[])

  useEffect(() => {
    let item = props.hot
    

    if (item !== 1) {
    let itemR = item.filter((e)=> e.typeId===+asTypeId)
    flag!==0?(item = itemR):(item = props.hot)
    console.log("itemIs",item)
     console.log("item2:",item)
     setOne(item[0]);
     console.log("one:",one)
     setTwo(item[1]);
     console.log("two:",two)
     setThree(item[2]);
     console.log("three:",three)
    }

  }, [props.hot,asTypeId])
  
  

  return (
    <>
      <div className="container d-flex socialRankMain">
        <span className="row socialRankBg" />
        <div className="row socialRanksItems no-gutters">
          <div className="row socialNewsTop no-gutters">
            <span className="socialHomeRanksTitile enHeader3">RANKING</span>
          </div>
          <div classNmae="container socialRankType">
            <div className="row rankTypeItems" id="rankTypeItems" value="">
              <button className="btn-rankType" type="button" value="1" onClick={show}>
                All
              </button>
              <button className="btn-rankType" type="button" value="2" onClick={show}>
                Cat
              </button>
              <button className="btn-rankType" type="button" value="3" onClick={show}>
                Dog
              </button>
            </div>
          </div>
          <div className="row socialRankBox">
            <div className="row socialRankItems no-gutters">
              <div className="singleRankCard">
                <span className="socialRankNumber enHeader2">1</span>
                <div className="socialRankCard">
                  <img
                    className="socialRankCardImg"
                    src={
                      one.talkPic === null
                      ? "/image/homepage/homepage-1.jpg"
                      : one.talkPic
                      }
                  />
                  <div className="topCardText">
                    <div className="rankTitleBox">
                      <div className="socialRankTitle">
                        <div>{one.createAt[0]+"."}</div>
                        <div className="socialRankDay">{one.createAt[1]+"."+one.createAt[2]}</div>
                      </div>
                    </div>
                    <div className="rankTextBox">
                      <div className="socialNewsSTitle paragraph2">{one.issueType}</div>
                      <p className="rankTitleText paragraph2">
                      {one.talkTitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="singleRankCard">
                <span className="socialRankNumber enHeader2">2</span>
                <div className="socialRankCard">
                  <img
                    className="socialRankCardImg"
                    src={
                      two.talkPic === null
                      ? "/image/homepage/homepage-1.jpg"
                      : two.talkPic
                      }
                  />
                  <div className="topCardText">
                    <div className="rankTitleBox">
                      <div className="socialRankTitle">
                        <div>{two.createAt[0]+"."}</div>
                        <div className="socialRankDay">{two.createAt[1]+"."+two.createAt[2]}</div>
                      </div>
                    </div>
                    <div className="rankTextBox">
                      <div className="socialNewsSTitle paragraph2">{two.issueType}</div>
                      <p className="rankTitleText paragraph2">
                      {two.talkTitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="singleRankCard">
                <span className="socialRankNumber enHeader2">3</span>
                <div className="socialRankCard">
                  <img
                    className="socialRankCardImg"
                    src={
                      three.talkPic === null
                      ? "/image/homepage/homepage-1.jpg"
                      : three.talkPic
                      }
                  />
                  <div className="topCardText">
                    <div className="rankTitleBox">
                      <div className="socialRankTitle">
                        <div>{three.createAt[0]+"."}</div>
                        <div className="socialRankDay">{three.createAt[1]+"."+three.createAt[2]}</div>
                      </div>
                    </div>
                    <div className="rankTextBox">
                      <div className="socialNewsSTitle paragraph2">{three.issueType}</div>
                      <p className="rankTitleText paragraph2">
                      {three.talkTitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (store) => {
  return {
    hot: store.socialReducer.getForumHot,
  };
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {
  getForumHotAsync,
})(SocialHomeRank);
