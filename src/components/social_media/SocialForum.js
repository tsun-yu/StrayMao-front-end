import React, { useState, useEffect } from "react";
import SocialEditButton from "./SocialEditButton";
import ForumArticleMain from "./ForumArticleMain";
import ForumArrowItems from "./ForumArrowItems";
import ForumListCard from "./ForumListCard";
import ForumNewsMain from "./ForumNewsMain";
import ArticleListCard from "./ArticleListCard";
import ForumCardPagebar from "./ForumCardPagebar";
import ArticleCardPagebar from "./ArticleCardPagebar";
import ArticleDetailPage from "./ArticleDetailPage";
import { gotoPage, setTotalPage,setArticleTotalPage, } from '../../actions/common/index';
import { connect } from "react-redux";

import {
  getForumListAsync,
  getArticleListAsync,
} from "../../actions/social_media/index";
import { HiOutlineReceiptRefund } from "react-icons/hi";

function SocialForum(props) {
  const [flag, setFlag] = useState(0);
  const [flag2, setFlag2] = useState(0);
  const [flag3, setFlag3] = useState(0);
  const [arr, setArr] = useState([]);
  const [arrForPet, setArrForPet] = useState([]);
  const [arrTwo, setArrTwo] = useState([]);
  const [display, setDisplay] = useState(<></>);
  const [display2, setDisplay2] = useState(<></>);
  const [display3, setDisplay3] = useState(<></>);
  const [articleInfoshow, setArticleInfoshow] = useState(<></>);
  const [articleTypeId, setArticleTypeId] = useState(<></>);
  // const [forumInfoshow, setForumInfoshow] = useState();
  // const [content4, setContent4] = useState();

  const content = [];
  const content2 = [];
  const content3 =[];

  let totalCards = props.info;

  // let totalPages = 0;
  // if(arrForPet!==[]){
  //   totalPages = Math.ceil(arrForPet.length / 4)
  // }else{
  //   totalPages = Math.ceil(totalCards.length / 4);
  // }
  let totalPages = Math.ceil(totalCards.length / 4);

  let nowPage = props.nowPage;
  let nowArticlePage = props.nowArticlePage;

  let totalArticles = props.info2;
  let totalArticlePages = Math.ceil(totalArticles.length / 3);

  let funTypeId=0;
  let funIssueId=0;
  let newData = 0;

  function show(event){
    document.getElementById("filterbtn1").innerHTML = event.target.innerHTML + "<i className='fas fa-caret-down'></i>";
    document.getElementById("filterbtn1").value = event.target.name;
    funTypeId = event.target.name;
    setArrTwo(funTypeId)
    console.log(funTypeId)
    newData = {
      typeId: funTypeId,
     }
     setFlag(1)
     console.log("newData1:",newData)
     console.log("content : " ,arr)
     console.log("content2 : " ,arr.filter((e)=> e.typeId===+funTypeId))

     showTest();
     event.preventDefault();
    }

    function showTest(){
      let id = document.getElementById("filterbtn1").value;

      let newArr=0;

      if(+id===0){
        newArr = arr
      }else{
        newArr = arr.filter((e)=> e.typeId===+id)
      }
     let newContent = []
    //  for(let i=0;i<newArr.length;i++){
    //   newContent.push(<ForumListCard test={newArr[i]} i={i} />);
    //  }
    totalPages = Math.ceil(newArr.length / 4);
    console.log("aaa : :", newArr)
    if (newArr.length > 0) {
      props.setTotalPage(totalPages);
      for (
        let j = 4 * (nowPage - 1);
        nowPage === totalPages ? j < newArr.length : j < 4 * nowPage;j++) {
          if (newArr.length > 0) {
            newContent.push(<ForumListCard test={newArr[j]} j={j} />);
          }
        }
        console.log(":??  ",newContent);
        setTimeout(()=>{setDisplay(<div className="row forumCard_Items no-gutters">{newContent}</div>);},10)
        setDisplay(<div className="row forumCard_Items no-gutters">{newContent}</div>);

        setArrForPet(newArr);
      }
    }


  function show2(event){
    document.getElementById("filterbtn2").innerHTML = event.target.innerHTML + "<i className='fas fa-caret-down'></i>";
    document.getElementById("filterbtn2").value = event.target.name;
    funIssueId = event.target.name;
    console.log(funIssueId)
    newData = {
      typeId: arrTwo,
      issueId:funIssueId,
     }

     setFlag2(1)
     console.log("newData:",newData)
     console.log("content : " ,arr)
     console.log("content2 : " ,arr.filter((e)=> e.typeId===+funTypeId))

     showTest2();

     event.preventDefault();
  }

  function showTest2(){
    let id = arrTwo;
    let issue =document.getElementById("filterbtn2").value;

    let newArr=0;
    if(+id===0){
      newArr = arr.filter((e)=> e.issueId===+issue)
    }else{
      newArr = arr.filter((e)=> e.typeId===+id && e.issueId===+issue)
    }
   let newContent = []
   totalPages = Math.ceil(newArr.length / 4);
  //  console.log("aaa : :", newArr)
   if (newArr.length > 0) {
    props.setTotalPage(totalPages);
    for (
      let j = 4 * (nowPage - 1);
      nowPage === totalPages ? j < newArr.length : j < 4 * nowPage;j++) {
        if (newArr.length > 0) {
          newContent.push(<ForumListCard test={newArr[j]} j={j} />);
        }
      }
      // console.log(":??  ",newContent);
      setTimeout(()=>{setDisplay(<div className="row forumCard_Items no-gutters">{newContent}</div>);},10)
      setDisplay(<div className="row forumCard_Items no-gutters">{newContent}</div>);

      setArrForPet(newArr);
    }
  }

  function articleTypeshow(event){
    document.getElementById("article_filterbtn").innerHTML = event.target.innerHTML + "<i className='fas fa-caret-down'></i>";
    setArticleTypeId(event.target.name)
    document.getElementById("allCardBtn_Issue").value = articleTypeId;
    console.log("allCardBtn_Issue:",document.getElementById("allCardBtn_Issue").value)
    setFlag3(1)
    event.preventDefault() 
  }
  // useEffect(()=>{

  //   let info = props.info

  //   if(info!==null){

  //     const arr = info.filter((e) => {
  //         return (e.categoryId === info.categoryId)&&(e.goodsId !== info[0].goodsId)
  //     });
  //     // console.log('arr: ',arr)
  
  //     if (info.length > 0) {
  //       // for (let i = 0; i < info.length; i++) {
  //       for (let i = 0; i < 3; i++) {
  //         content.push(
  //           <StoreCard
  //             item={{
  //               goodsId: arr[i].goodsId,
  //               goodsImgs: arr[i].goodsImgs,
  //               name: arr[i].name,
  //               price: arr[i].price,
  //               pricing: arr[i].pricing,
  //             }}
  //           />
  //         )
  //       }
  //       setDisplay(content)
  //     }
  //   }
  
  // },[props.item])



  useEffect(() => {
    props.getForumListAsync();
    props.getArticleListAsync();
  }, [])

  useEffect(() => {
    totalCards = props.info;
    totalPages = Math.ceil(totalCards.length / 4);
    if(totalCards.length > 0) {
      props.setTotalPage(totalPages);
      setArr(totalCards);
      if(flag!==0&&flag2!==0){
        showTest2();
      }else if(flag!==0){
        console.log("arr:",arr);showTest();
    }else{
      for (let i = 4 * (nowPage - 1);nowPage === totalPages ? i < totalCards.length : i < 4 * nowPage;
        i++
      ) {
        if (totalCards.length > 0) {
          console.log(":", totalCards[i]);
          content.push(<ForumListCard test={totalCards[i]} i={i} />);
        }
      }   
    }
  }
    if (totalCards.length > 0) {
      console.log(props.info);
      for (let i = 0; i < totalCards.length; i++) {
        content3.push(
          <ForumArticleMain
            test={totalCards[i]}
          />
        );
      }
      // console.log("content3:",content3)
      // content3.push(
      //     <ForumArticleMain
      //       test={totalCards[0]}
      //       forumDetailId={forumInfoshow}
      //     />
      //   );
    }
    // setContent4(content3.slice())
    // console.log("content4:",content4)

    setDisplay(<div className="row forumCard_Items no-gutters">{content}</div>);

    setDisplay3(content3);

    totalArticles = props.info2;
    totalArticlePages = Math.ceil(totalArticles.length / 3);
    if (totalArticles.length > 0) {
      // console.log(props.info2);
      let totalArticlesR = totalArticles.filter((e)=> e.typeId===+articleTypeId);
      (flag3!==0 && +articleTypeId!==0)?(totalArticles = totalArticlesR):(totalArticles = props.info2)
      
      totalArticlePages = Math.ceil(totalArticles.length / 3);
      props.setArticleTotalPage(totalArticlePages);
      for (
        let i = 3 * (nowArticlePage - 1);
        nowArticlePage === totalArticlePages ? i < totalArticles.length : i < 3 * nowArticlePage;
        i++
      ) {
        if (totalArticles.length > 0) {
          // console.log(":", totalCards[i]);
          content2.push(<ArticleListCard
            info2={totalArticles[i]}
            setArticleInfoshow={setArticleInfoshow}
          />);
        }
      }
    }
    // if (totalArticles.length > 0) {
    //   console.log(props.info2);
    //   for (let i = 0; i < totalArticles.length; i++) {
    //     content2.push(
    //       <ArticleListCard
    //         info2={totalArticles[i]}
    //         setArticleInfoshow={setArticleInfoshow}
    //       />
    //     );
    //   }
    // }

    setDisplay2(
      <div className="row socialArticleCardItems no-gutters">{content2}</div>
    );
  }, [props.info, props.info2,nowPage,nowArticlePage,articleTypeId]);

  return (
    <>
      <div className="container">
        <div className="row">
          <span className="socialTitle header4">討論交流</span>
        </div>
        <div className="container forumMain d-flex">
        <SocialEditButton/> 
        <div className="forumMainBg">
          <div className="forumBCItemsControl">
            <div className="forumTopBigCard">{display3}</div>
          </div>
        </div>
          <ForumArrowItems />
        </div>
      </div>
      <div className="container-fluid forumMiddle">
        <div className="container">
          <div className="row forumMiddleItems">
            <span className="row forumMiddleBox">
              <div>
                <h3 className="header5">更多話題</h3>
                <div className="forumMiddleLine" />
                <p className="caption">看看現在在討論什麼</p>
              </div>
              <button
                className="btn-orange forumMiddleBtn"
                type="button"
                value="前往列表"
                onClick={()=>{
                  document.getElementById("forumAllCardList").scrollIntoView();
                }}
              >
                前往列表
              </button>
            </span>
            <span className="row forumMiddleBox">
              <div>
                <h3 className="header5">寵物知識</h3>
                <div className="forumMiddleLine" />
                <p className="caption">有些小事告訴你</p>
              </div>
              <button
                className="btn-orange forumMiddleBtn"
                type="button"
                value="前往知識"
                onClick={()=>{
                  document.getElementById("petknowledgeMain").scrollIntoView();
                }}
              >
                前往知識
              </button>
            </span>
          </div>
        </div>
      </div>
      <ForumNewsMain />

      <div className="container forumAllCardList" id="forumAllCardList">
        <div className="forumAllCardBT d-flex">
          <div className="row forumNewsTitle">
            <span className="forumTitleLine"></span>
            <h3 className="forum_BTitle">討論話題</h3>
            <span className="forumTitleLine"></span>
          </div>
        </div>
        <div className="container-fluid forum_AllCardItems">
          <div className="row forumAllCardBtnItems">
            <div className="allCardBtnLeft d-flex">
              <div className="allCardBtn_Type btn-filter">
                <button className="filterbtn firstSelect" id="filterbtn1" value="">全部
                  <i className="fas fa-caret-down"></i>
                </button>
                <div className="btn-filter-content" name="petType">
                  <a href="#" name="0" onClick={show} >全部</a>
                  <a href="#" name="1" onClick={show}>不分類</a>
                  <a href="#" name="2" onClick={show}>貓</a>
                  <a href="#" name="3" onClick={show}>狗</a>
                </div>
              </div>
              <div className="allCardBtn_Issue btn-filter">
                <button className="filterbtn firstSelect" id="filterbtn2" value="">
                  日常 <i className="fas fa-caret-down"></i>
                </button>
                <div className="btn-filter-content">
                  <a href="#" name="1"  onClick={show2}>日常</a>
                  <a href="#" name="2"  onClick={show2}>行為</a>
                  <a href="#" name="3" onClick={show2}>照護</a>
                  <a href="#" name="4" onClick={show2}>飲食</a>
                </div>
              </div>
            </div>
            <div className="allCardBtnRight">
              <div className="allCardBtn_Rank btn-filter">
                <button className="filterbtn">
                  由新到舊 <i className="fas fa-caret-down"></i>
                </button>
                <div className="btn-filter-content">
                  <a href="#">由新到舊</a>
                  <a href="#">由舊到新</a>
                </div>
              </div>
            </div>
          </div>
          {/* forum列表 */}
          {display}
          {/* 從首頁拿來的arrow */}
          <ForumCardPagebar />
        </div>

        <div className="forumNewsLineBetween" />
      </div>
      <div className="container forumSaySomething">
        <h3 className="enHeader2 forumSayBigText">or -</h3>
        <p className="header5 forumSaySText">從文章中找到新話題。</p>
      </div>

      <div className="container petknowledgeMain" id="petknowledgeMain">
        <div className="row socialforumItems no-gutters">
          <div className="container bigArticleRange">
            <div>
              <div className="row petknowledgeTitle" id="petknowledgeTitle">
                <span className="forumTitleLine"></span>
                <h3 className="forum_BTitle">寵物知識</h3>
                <span className="forumTitleLine"></span>
              </div>
            </div>
            <ArticleDetailPage articleDetailId={articleInfoshow} />
            <div className="petknowledgeRight">
              <div className="petknowledgeType">
                <h3 className="header5">善用分類篩選</h3>
                <div className="petknowledgeSLine" />
                <p className="caption">幫助您找到更多寶貝知識</p>
              </div>
              <div className="allCardBtn_Issue btn-filter" id="allCardBtn_Issue" value="">
                <button className="filterbtn firstSelect" id="article_filterbtn">
                  全部 <i className="fas fa-caret-down"></i>
                </button>
                <div className="btn-filter-content">
                  <a href="#" name="0" onClick={articleTypeshow} >全部</a>
                  <a href="#" name="1" onClick={articleTypeshow}>不分類</a>
                  <a href="#" name="2" onClick={articleTypeshow}>貓</a>
                  <a href="#" name="3" onClick={articleTypeshow}>狗</a>
                </div>
              </div>
            </div>
            {/* 文章清單 */}
            {display2}
          </div>
          <ArticleCardPagebar />
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (store) => {
  return {
    info: store.socialReducer.getForumList,
    info2: store.socialReducer.getArticleList,
    nowPage: store.nowPage,
    totalPage: store.totalPage,
    nowArticlePage: store.nowArticlePage,
    totalArticlePage: store.totalArticlePage,
  };
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {
  getArticleListAsync,
  getForumListAsync,
  gotoPage,
  setTotalPage,
  setArticleTotalPage,
})(SocialForum);
