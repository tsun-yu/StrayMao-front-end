import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getForumDetailAsync } from "../../actions/social_media/index";

function ForumArticleMain(props) {
  useEffect(() => {
    props.getForumDetailAsync(12);
  }, []);

  useEffect(() => {
    let id = props.forumDetailId ?? 1;
    props.getForumDetailAsync(id);
  }, [props.forumDetailId]);

  return (
    <div className="forumArticleMain">
      <div className="forumArticleImgBox">
        <span className="container forum_TypeBox">
          <p className="enHeader6 forum_BigType">Type.</p>
          <div className="socialforum_Type">
            <div className="row paragraph1 no-gutters">
              {props.getdetail2.petType} /
            </div>
            <div className="row paragraph1 socialSType no-gutters">
              {props.getdetail2.issueType}
            </div>
          </div>
          <span className="forum_TypeBg" />
        </span>
        <img
          className="forumArticleImg"
          src={
            props.getdetail2.talkPic === null
              ? "/image/homepage/homepage-1.jpg"
              : props.getdetail2.talkPic
          }
        />
        <div className="forumArticleLinkBox header7">
          <div className="forumArticleLinkTitle">
            <p>喜歡這個話題嗎？</p>
            <p>你可以這樣做：</p>
          </div>
          <div className="forumArticleLinkText">
            <h3 className="header5">分享出去</h3>
            <div className="forumLinkLine" />
            <p className="caption">讓朋友加入討論</p>
          </div>
        </div>
      </div>
      <div className="forumArticleContent">
        <div className="forumArticleTopLine" />
        <span className="row forumAutor paragraph2">
          <img className="forumAutorImg" src="/image/homepage/homepage-1.jpg" />
          <p>{props.getdetail2.memberId}</p>
        </span>
        <span className="forumArticleDate enParagraph">
          {props.getdetail2.createAt}
        </span>
        <div className="forumArticleTItems">
          <h3 className="forumArticleTitle header6">
            {props.getdetail2.talkTitle}
          </h3>
          <div className="forumArticleText caption">
            {props.getdetail2.talkContent}
          </div>
        </div>
        <button
          className="forumReplyHiden paragraph2"
          type="button"
          value="隱藏留言"
        >
          隱藏留言
        </button>
        <div className="conatiner forumReplyMain">
          <div className="row forumUserTalk no-gutters justify-content-center">
            <span className="forumReplyTopLine" />
            <textarea className="forumReplyBox"/>
            <button className="forumUserTalkBtn" type="button" value="送出">
              送出
            </button>
          </div>
          <div className="container">
            <div className="forumReplyContent">
              {/* 留言區 */}
              <div className="singleforumUserReply">
                <div className="forumUserReply">
                  <div className="forumUserReplyItems">
                    <span className="row paragraph2">
                      <img
                        className="forumUserImg"
                        src="/image/homepage/homepage-1.jpg"
                      />
                      <p>路人甲已</p>
                      <span className="forumUserRBtn">
                        <button class="btn-brown" type="button" value="回覆">
                          回覆
                        </button>
                      </span>
                    </span>
                  </div>
                  <div className="forumUserReplyText caption">
                    <p>
                      直接送去寵物旅館吧，包吃直接送去寵物旅館吧，包吃直接送去寵物旅館吧直接送去寵物旅館吧
                    </p>
                    <p>2020. 09/30. 10:30</p>
                  </div>
                </div>
              </div>

              <div className="singleforumAutorReply">
                <div className="forumAutorReply">
                  <div className="forumAutorReplyItems">
                    <span className="row paragraph2">
                      <img
                        className="forumUserImg"
                        src="/image/homepage/homepage-1.jpg"
                      />
                      <p>路人甲已</p>
                    </span>
                  </div>
                  <div className="forumAutorReplyText caption">
                    <p>直接送去寵物旅館吧，包吃直接送去寵物旅館吧</p>
                    <p>2020. 09/30. 10:30</p>
                  </div>
                </div>
              </div>
              {/* 留言結束 */}
              {/* 留言區 */}
              <div className="singleforumUserReply">
                <div className="forumUserReply">
                  <div className="forumUserReplyItems">
                    <span className="row paragraph2">
                      <img
                        className="forumUserImg"
                        src="/image/homepage/homepage-1.jpg"
                      />
                      <p>路人甲已</p>
                      <span className="forumUserRBtn">
                        <button class="btn-brown" type="button" value="回覆">
                          回覆
                        </button>
                      </span>
                    </span>
                  </div>
                  <div className="forumUserReplyText caption">
                    <p>
                      直接送去寵物旅館吧，包吃直接送去寵物旅館吧，包吃直接送去寵物旅館吧直接送去寵物旅館吧
                    </p>
                    <p>2020. 09/30. 10:30</p>
                  </div>
                </div>
              </div>

              <div className="singleforumAutorReply">
                <div className="forumAutorReply">
                  <div className="forumAutorReplyItems">
                    <span className="row paragraph2">
                      <img
                        className="forumUserImg"
                        src="/image/homepage/homepage-1.jpg"
                      />
                      <p>路人甲已</p>
                    </span>
                  </div>
                  <div className="forumAutorReplyText caption">
                    <p>直接送去寵物旅館吧，包吃直接送去寵物旅館吧</p>
                    <p>2020. 09/30. 10:30</p>
                  </div>
                </div>
              </div>
              {/* 留言結束 */}
              {/* 留言區 */}
              <div className="singleforumUserReply">
                <div className="forumUserReply">
                  <div className="forumUserReplyItems">
                    <span className="row paragraph2">
                      <img
                        className="forumUserImg"
                        src="/image/homepage/homepage-1.jpg"
                      />
                      <p>路人甲已</p>
                      <span className="forumUserRBtn">
                        <button class="btn-brown" type="button" value="回覆">
                          回覆
                        </button>
                      </span>
                    </span>
                  </div>
                  <div className="forumUserReplyText caption">
                    <p>
                      直接送去寵物旅館吧，包吃直接送去寵物旅館吧，包吃直接送去寵物旅館吧直接送去寵物旅館吧
                    </p>
                    <p>2020. 09/30. 10:30</p>
                  </div>
                </div>
              </div>

              <div className="singleforumAutorReply">
                <div className="forumAutorReply">
                  <div className="forumAutorReplyItems">
                    <span className="row paragraph2">
                      <img
                        className="forumUserImg"
                        src="/image/homepage/homepage-1.jpg"
                      />
                      <p>路人甲已</p>
                    </span>
                  </div>
                  <div className="forumAutorReplyText caption">
                    <p>直接送去寵物旅館吧，包吃直接送去寵物旅館吧</p>
                    <p>2020. 09/30. 10:30</p>
                  </div>
                </div>
              </div>
              {/* 留言結束 */}
              {/* 留言區 */}
              <div className="singleforumUserReply">
                <div className="forumUserReply">
                  <div className="forumUserReplyItems">
                    <span className="row paragraph2">
                      <img
                        className="forumUserImg"
                        src="/image/homepage/homepage-1.jpg"
                      />
                      <p>路人甲已</p>
                      <span className="forumUserRBtn">
                        <button class="btn-brown" type="button" value="回覆">
                          回覆
                        </button>
                      </span>
                    </span>
                  </div>
                  <div className="forumUserReplyText caption">
                    <p>
                      直接送去寵物旅館吧，包吃直接送去寵物旅館吧，包吃直接送去寵物旅館吧直接送去寵物旅館吧
                    </p>
                    <p>2020. 09/30. 10:30</p>
                  </div>
                </div>
              </div>

              <div className="singleforumAutorReply">
                <div className="forumAutorReply">
                  <div className="forumAutorReplyItems">
                    <span className="row paragraph2">
                      <img
                        className="forumUserImg"
                        src="/image/homepage/homepage-1.jpg"
                      />
                      <p>路人甲已</p>
                    </span>
                  </div>
                  <div className="forumAutorReplyText caption">
                    <p>直接送去寵物旅館吧，包吃直接送去寵物旅館吧</p>
                    <p>2020. 09/30. 10:30</p>
                  </div>
                </div>
              </div>
              {/* 留言結束 */}
              {/* 留言區 */}
              <div className="singleforumUserReply">
                <div className="forumUserReply">
                  <div className="forumUserReplyItems">
                    <span className="row paragraph2">
                      <img
                        className="forumUserImg"
                        src="/image/homepage/homepage-1.jpg"
                      />
                      <p>路人甲已</p>
                      <span className="forumUserRBtn">
                        <button class="btn-brown" type="button" value="回覆">
                          回覆
                        </button>
                      </span>
                    </span>
                  </div>
                  <div className="forumUserReplyText caption">
                    <p>
                      直接送去寵物旅館吧，包吃直接送去寵物旅館吧，包吃直接送去寵物旅館吧直接送去寵物旅館吧
                    </p>
                    <p>2020. 09/30. 10:30</p>
                  </div>
                </div>
              </div>

              <div className="singleforumAutorReply">
                <div className="forumAutorReply">
                  <div className="forumAutorReplyItems">
                    <span className="row paragraph2">
                      <img
                        className="forumUserImg"
                        src="/image/homepage/homepage-1.jpg"
                      />
                      <p>路人甲已</p>
                    </span>
                  </div>
                  <div className="forumAutorReplyText caption">
                    <p>直接送去寵物旅館吧，包吃直接送去寵物旅館吧</p>
                    <p>2020. 09/30. 10:30</p>
                  </div>
                </div>
              </div>
              {/* 留言結束 */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    getdetail2: store.socialReducer.getForumDetail,
    forumDetailId: store.socialReducer.forumDetailId,
  };
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {
  getForumDetailAsync,
})(ForumArticleMain);
