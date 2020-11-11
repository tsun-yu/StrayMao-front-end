import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ArticleDetail from "./ArticleDetail";
import { getArticleDetailAsync } from "../../actions/social_media/index";

function ArticleDetailPage(props) {
  // const [test, setTest] = useState({});

  // useEffect(() => {
  //   let id = props.articleDetailId ?? 1;
  //   setTest(props.getArticleDetailAsync(id));
  // }, []);
  // console.log("id :", props.articleDetailId);
  useEffect(() => {
    let id = props.articleDetailId ?? 1;
    props.getArticleDetailAsync(id);
  }, [props.articleDetailId]);

  return (
    <>
      <ArticleDetail getdetail={props.getdetail} />
      {/* <div className="adopRecommand">
        <div className="col p-1">
          <AdopMainCardPic info={props.info} />
        </div>
        <div className="col">
          <AdopMainInfo info={props.info} />
        </div>
      </div>
      <AdopDetailInfo info={props.info} />

      <button
        className="btn-green d-flex justify-content-center  align-items-center m-auto"
        type="button"
        value="123"
      >
        我要領養
      </button> */}
    </>
  );
}

const mapStateToProps = (store) => {
  return {
    getdetail: store.socialReducer.getArticleDetail,
    articleDetailId: store.socialReducer.articleDetailId,
  };
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {
  getArticleDetailAsync,
})(ArticleDetailPage);
