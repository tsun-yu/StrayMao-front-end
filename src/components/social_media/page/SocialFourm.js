import React, { useState, useEffect } from "react";
import FourmArticlePage from "../commponents/SocialFourm/FourmArticlePage";
import FourmArticleBox from "../commponents/SocialFourm/FourmArticleBox";
import FourmReply from "../commponents/SocialFourm/FourmReply";

function SocialFourm(props) {
  return (
    <>
      <div className="container">
        <div className="row">
          <span className="socialTitle header4">討論交流</span>
        </div>
        <div className="container fourmMain">
          <div className="fourmMainBg" />
          <div className="socialEditButtom paragraph2">
            <div className="fourmMyEdit">
              <span>建立話題</span>
              <img
                className="pinkarrow"
                src="./icomoon/SVG/_103-plus-white.svg"
                alt=""
              />
            </div>
            <div className="fourmMyEdit">
              <span>我的話題</span>
              <img
                className="pinkarrow"
                src="./icomoon/SVG/_104-pencil-white.svg"
                alt=""
              />
            </div>
          </div>
          <div className="container fourmArticleMain">
            <div className="fourmArticleImgBox">
              <span className="container fourm_TypeBox">
                <p className="enHeader6 fourm_BigType">Type.</p>
                <div className="socialFourm_Type">
                  <div className="row paragraph1 no-gutters">貓 /</div>
                  <div className="row paragraph1 socialSType no-gutters">
                    日常
                  </div>
                </div>
                <span className="fourm_TypeBg" />
              </span>
              <img
                className="fourmArticleImg"
                src="/image/homepage/homepage-1.jpg"
              />
              <div className="fourmArticleLinkBox header7">
                <div className="fourmArticleLinkTitle">
                  <p>喜歡這個話題嗎？</p>
                  <p>你可以這樣做：</p>
                </div>
                <div className="fourmArticleLinkText">
                  <h3 className="header5">分享出去</h3>
                  <div className="fourmLinkLine" />
                  <p className="caption">讓朋友加入討論</p>
                </div>
              </div>
            </div>
            <div className="fourmArticleContent">
              <div className="fourmArticleTopLine" />
              <span className="row fourmAutor paragraph2">
                <img
                  className="fourmAutorImg"
                  src="/image/homepage/homepage-1.jpg"
                />
                <p>路人甲已</p>
              </span>
              <span className="fourmArticleDate enParagraph">2020. 09/30</span>
              <div className="fourmArticleTItems">
                <h3 className="fourmArticleTitle header6">
                  帶你家狗狗出來玩吧！
                </h3>
                <div className="fourmArticleText caption">
                  我家的狗最近有點笨，不知道是不是缺乏
                  玩伴，因此我想辦法帶他去各種地方玩，
                  但是這幾天實在是不知道能去哪了，求推
                  薦！我家的狗最近有點笨，不知道是不是缺乏
                  玩伴，因此我想辦法帶他去各種地方玩，
                  但是這幾天實在是不知道能去哪了，求推薦！
                </div>
              </div>
              <button
                className="fourmReplyHiden paragraph2"
                type="button"
                value="隱藏留言"
              >
                隱藏留言
              </button>
              <div className="conatiner fourmReplyMain">
                <div className="row fourmUserTalk no-gutters justify-content-center">
                  <span className="fourmReplyTopLine" />
                  <textarea />
                  <button
                    className="fourmUserTalkBtn"
                    type="button"
                    value="送出"
                  >
                    送出
                  </button>
                </div>
                <div className="container">
                  <div className="fourmReplyContent">
                    {/* 留言區 */}
                    <div className="singlefourmUserReply">
                      <div className="fourmUserReply">
                        <div className="fourmUserReplyItems">
                          <span className="row paragraph2">
                            <img
                              className="fourmUserImg"
                              src="/image/homepage/homepage-1.jpg"
                            />
                            <p>路人甲已</p>
                            <span className="fourmUserRBtn">
                              <button
                                class="btn-brown"
                                type="button"
                                value="回覆"
                              >
                                回覆
                              </button>
                            </span>
                          </span>
                        </div>
                        <div className="fourmUserReplyText caption">
                          <p>
                            直接送去寵物旅館吧，包吃直接送去寵物旅館吧，包吃直接送去寵物旅館吧直接送去寵物旅館吧
                          </p>
                          <p>2020. 09/30. 10:30</p>
                        </div>
                      </div>
                    </div>

                    <div className="singlefourmAutorReply">
                      <div className="fourmAutorReply">
                        <div className="fourmAutorReplyItems">
                          <span className="row paragraph2">
                            <img
                              className="fourmUserImg"
                              src="/image/homepage/homepage-1.jpg"
                            />
                            <p>路人甲已</p>
                          </span>
                        </div>
                        <div className="fourmAutorReplyText caption">
                          <p>直接送去寵物旅館吧，包吃直接送去寵物旅館吧</p>
                          <p>2020. 09/30. 10:30</p>
                        </div>
                      </div>
                    </div>
                    {/* 留言結束 */}
                    {/* 留言區 */}
                    <div className="singlefourmUserReply">
                      <div className="fourmUserReply">
                        <div className="fourmUserReplyItems">
                          <span className="row paragraph2">
                            <img
                              className="fourmUserImg"
                              src="/image/homepage/homepage-1.jpg"
                            />
                            <p>路人甲已</p>
                            <span className="fourmUserRBtn">
                              <button
                                class="btn-brown"
                                type="button"
                                value="回覆"
                              >
                                回覆
                              </button>
                            </span>
                          </span>
                        </div>
                        <div className="fourmUserReplyText caption">
                          <p>
                            直接送去寵物旅館吧，包吃直接送去寵物旅館吧，包吃直接送去寵物旅館吧直接送去寵物旅館吧
                          </p>
                          <p>2020. 09/30. 10:30</p>
                        </div>
                      </div>
                    </div>

                    <div className="singlefourmAutorReply">
                      <div className="fourmAutorReply">
                        <div className="fourmAutorReplyItems">
                          <span className="row paragraph2">
                            <img
                              className="fourmUserImg"
                              src="/image/homepage/homepage-1.jpg"
                            />
                            <p>路人甲已</p>
                          </span>
                        </div>
                        <div className="fourmAutorReplyText caption">
                          <p>直接送去寵物旅館吧，包吃直接送去寵物旅館吧</p>
                          <p>2020. 09/30. 10:30</p>
                        </div>
                      </div>
                    </div>
                    {/* 留言結束 */}
                    {/* 留言區 */}
                    <div className="singlefourmUserReply">
                      <div className="fourmUserReply">
                        <div className="fourmUserReplyItems">
                          <span className="row paragraph2">
                            <img
                              className="fourmUserImg"
                              src="/image/homepage/homepage-1.jpg"
                            />
                            <p>路人甲已</p>
                            <span className="fourmUserRBtn">
                              <button
                                class="btn-brown"
                                type="button"
                                value="回覆"
                              >
                                回覆
                              </button>
                            </span>
                          </span>
                        </div>
                        <div className="fourmUserReplyText caption">
                          <p>
                            直接送去寵物旅館吧，包吃直接送去寵物旅館吧，包吃直接送去寵物旅館吧直接送去寵物旅館吧
                          </p>
                          <p>2020. 09/30. 10:30</p>
                        </div>
                      </div>
                    </div>

                    <div className="singlefourmAutorReply">
                      <div className="fourmAutorReply">
                        <div className="fourmAutorReplyItems">
                          <span className="row paragraph2">
                            <img
                              className="fourmUserImg"
                              src="/image/homepage/homepage-1.jpg"
                            />
                            <p>路人甲已</p>
                          </span>
                        </div>
                        <div className="fourmAutorReplyText caption">
                          <p>直接送去寵物旅館吧，包吃直接送去寵物旅館吧</p>
                          <p>2020. 09/30. 10:30</p>
                        </div>
                      </div>
                    </div>
                    {/* 留言結束 */}
                    {/* 留言區 */}
                    <div className="singlefourmUserReply">
                      <div className="fourmUserReply">
                        <div className="fourmUserReplyItems">
                          <span className="row paragraph2">
                            <img
                              className="fourmUserImg"
                              src="/image/homepage/homepage-1.jpg"
                            />
                            <p>路人甲已</p>
                            <span className="fourmUserRBtn">
                              <button
                                class="btn-brown"
                                type="button"
                                value="回覆"
                              >
                                回覆
                              </button>
                            </span>
                          </span>
                        </div>
                        <div className="fourmUserReplyText caption">
                          <p>
                            直接送去寵物旅館吧，包吃直接送去寵物旅館吧，包吃直接送去寵物旅館吧直接送去寵物旅館吧
                          </p>
                          <p>2020. 09/30. 10:30</p>
                        </div>
                      </div>
                    </div>

                    <div className="singlefourmAutorReply">
                      <div className="fourmAutorReply">
                        <div className="fourmAutorReplyItems">
                          <span className="row paragraph2">
                            <img
                              className="fourmUserImg"
                              src="/image/homepage/homepage-1.jpg"
                            />
                            <p>路人甲已</p>
                          </span>
                        </div>
                        <div className="fourmAutorReplyText caption">
                          <p>直接送去寵物旅館吧，包吃直接送去寵物旅館吧</p>
                          <p>2020. 09/30. 10:30</p>
                        </div>
                      </div>
                    </div>
                    {/* 留言結束 */}
                    {/* 留言區 */}
                    <div className="singlefourmUserReply">
                      <div className="fourmUserReply">
                        <div className="fourmUserReplyItems">
                          <span className="row paragraph2">
                            <img
                              className="fourmUserImg"
                              src="/image/homepage/homepage-1.jpg"
                            />
                            <p>路人甲已</p>
                            <span className="fourmUserRBtn">
                              <button
                                class="btn-brown"
                                type="button"
                                value="回覆"
                              >
                                回覆
                              </button>
                            </span>
                          </span>
                        </div>
                        <div className="fourmUserReplyText caption">
                          <p>
                            直接送去寵物旅館吧，包吃直接送去寵物旅館吧，包吃直接送去寵物旅館吧直接送去寵物旅館吧
                          </p>
                          <p>2020. 09/30. 10:30</p>
                        </div>
                      </div>
                    </div>

                    <div className="singlefourmAutorReply">
                      <div className="fourmAutorReply">
                        <div className="fourmAutorReplyItems">
                          <span className="row paragraph2">
                            <img
                              className="fourmUserImg"
                              src="/image/homepage/homepage-1.jpg"
                            />
                            <p>路人甲已</p>
                          </span>
                        </div>
                        <div className="fourmAutorReplyText caption">
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
          <span className="fourmArrowItems">
            <span className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17.636"
                height="21.653"
                viewBox="0 0 17.636 21.653"
              >
                <path
                  id="Path_1866"
                  data-name="Path 1866"
                  d="M.584,8.77,11.69.391a1.5,1.5,0,0,1,2.5,1.025l.431,16.072c.117,1.039-1.176,1.427-2.006.83L.584,10.846A1.216,1.216,0,0,1,.584,8.77Z"
                  transform="translate(1.501 1.531)"
                  fill="none"
                  stroke="#ed8f8f"
                  stroke-miterlimit="10"
                  stroke-width="3"
                />
              </svg>
            </span>
            <span className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18.381"
                height="22.256"
                viewBox="0 0 18.381 22.256"
              >
                <path
                  id="Path_1865"
                  data-name="Path 1865"
                  d="M.584,8.77,11.69.391a1.5,1.5,0,0,1,2.5,1.025l.431,16.072c.117,1.039-1.176,1.427-2.006.83L.584,10.846A1.216,1.216,0,0,1,.584,8.77Z"
                  transform="matrix(-0.999, -0.035, 0.035, -0.999, 16.179, 20.673)"
                  fill="none"
                  stroke="#ed8f8f"
                  stroke-miterlimit="10"
                  stroke-width="3"
                />
              </svg>
            </span>
          </span>
        </div>
      </div>
      <div className="container-fluid fourmMiddle">
        <div className="container">
          <div className="row fourmMiddleItems">
            <span className="row fourmMiddleBox">
              <div>
                <h3 className="header5">更多話題</h3>
                <div className="fourmMiddleLine" />
                <p className="caption">看看現在在討論什麼</p>
              </div>
              <button
                className="btn-orange fourmMiddleBtn"
                type="button"
                value="前往列表"
              >
                前往列表
              </button>
            </span>
            <span className="row fourmMiddleBox">
              <div>
                <h3 className="header5">寵物知識</h3>
                <div className="fourmMiddleLine" />
                <p className="caption">有些小事告訴你</p>
              </div>
              <button
                className="btn-orange fourmMiddleBtn"
                type="button"
                value="前往知識"
              >
                前往知識
              </button>
            </span>
          </div>
        </div>
      </div>
      <div className="container fourmNewsMain">
        <div className="fourmNewsBT">
          <div className="row fourmNewsTitle">
            <sapn className="fourmTitleLine"></sapn>
            <h3 className="enHeader5">News</h3>
            <sapn className="fourmTitleLine"></sapn>
          </div>
        </div>
        <div className="fourm_NewsItems">
          <div className="row no-gutters">
            <p className="fourmHotTitle">HOT</p>
            <span>咪可思X福壽100 奔跑吧！毛小孩公益半程馬拉松</span>
          </div>
        </div>
        <div className="fourm_NewsItems">
          <div className="row no-gutters">
            <p className="fourmNewTitle">NEW</p>
            <span className="fourmNewColor">
              咪可思X福壽100 奔跑吧！毛小孩公益半程馬拉松
            </span>
          </div>
        </div>
        <div className="fourmNewsLineBetween" />
      </div>

      <div className="container fourmAllCardList">
        <div className="fourmAllCardBT">
          <div className="row fourmNewsTitle">
            <sapn className="fourmTitleLine"></sapn>
            <h3 className="fourm_BTitle">討論話題</h3>
            <sapn className="fourmTitleLine"></sapn>
          </div>
        </div>
        <div className="container-fluid fourm_AllCardItems">
          <div className="row fourmAllCardBtnItems">
            <div className="allCardBtnLeft">
              <div class="allCardBtn_Type btn-filter">
                <button class="filterbtn">
                  全部 <i class="fas fa-caret-down"></i>
                </button>
                <div class="btn-filter-content">
                  <a href="#">全部</a>
                  <a href="#">貓</a>
                  <a href="#">狗</a>
                </div>
              </div>
              <div class="allCardBtn_Issue btn-filter">
                <button class="filterbtn">
                  日常 <i class="fas fa-caret-down"></i>
                </button>
                <div class="btn-filter-content">
                  <a href="#">日常</a>
                  <a href="#">行為</a>
                  <a href="#">照護</a>
                </div>
              </div>
            </div>
            <div className="allCardBtnRight">
              <div class="allCardBtn_Rank btn-filterGreen">
                <button class="filterbtnGreen fourmDayRankBtn">
                  由新到舊 <i class="fas fa-caret-down"></i>
                </button>
                <div class="btn-filter-content">
                  <a href="#">由新到舊</a>
                  <a href="#">由舊到新</a>
                </div>
              </div>
            </div>
          </div>
          {/* 從homepage拿來的fourm列表 */}
          <div className="row fourmCard_Items no-gutters">
            <div className="singleRankCard">
              <div className="socialFourmCard">
                <span className="container fourmTitleBox">
                  <div className="socialFourmTitle">
                    <div className="enHeader6">2020.</div>
                    <div className="enParagraph">9.30</div>
                  </div>
                  <span className="socialFourmBTitile paragraph1">
                    用可愛的臉騙吃騙喝
                  </span>
                </span>
                <span className="fourmCardBg" />
                <img
                  className="socialFourmCardImg"
                  src="/image/homepage/homepage-1.jpg"
                  object-fit="cover"
                />
                <span className="fourmTypeBox">
                  <div className="container socialFourmType">
                    <div className="row paragraph1 no-gutters">貓 /</div>
                    <div className="row paragraph1 socialSType no-gutters">
                      日常
                    </div>
                  </div>
                  <span className="fourmTypeBg" />
                </span>
              </div>
            </div>
            <div className="singleRankCard">
              <div className="socialFourmCard">
                <span className="fourmTitleBox">
                  <div className="socialFourmTitle">
                    <div className="enHeader6">2020.</div>
                    <div className="enParagraph">9.30</div>
                  </div>
                  <span className="socialFourmBTitile paragraph1">
                    用可愛的臉騙吃騙喝
                  </span>
                </span>
                <span className="fourmCardBg" />
                <img
                  className="socialFourmCardImg"
                  src="/image/homepage/homepage-1.jpg"
                  object-fit="cover"
                />
                <span className="fourmTypeBox">
                  <div className="container socialFourmType">
                    <div className="row paragraph1 no-gutters">貓 /</div>
                    <div className="row paragraph1 socialSType no-gutters">
                      日常
                    </div>
                  </div>
                  <span className="fourmTypeBg" />
                </span>
              </div>
            </div>
            <div className="singleRankCard">
              <div className="socialFourmCard">
                <span className="container fourmTitleBox">
                  <div className="socialFourmTitle">
                    <div className="enHeader6">2020.</div>
                    <div className="enParagraph">9.30</div>
                  </div>
                  <span className="socialFourmBTitile paragraph1">
                    用可愛的臉騙吃騙喝
                  </span>
                </span>
                <span className="fourmCardBg" />
                <img
                  className="socialFourmCardImg"
                  src="/image/homepage/homepage-1.jpg"
                  object-fit="cover"
                />
                <span className="fourmTypeBox">
                  <div className="container socialFourmType">
                    <div className="row paragraph1 no-gutters">貓 /</div>
                    <div className="row paragraph1 socialSType no-gutters">
                      日常
                    </div>
                  </div>
                  <span className="fourmTypeBg" />
                </span>
              </div>
            </div>
            <div className="singleRankCard">
              <div className="socialFourmCard">
                <span className="container fourmTitleBox">
                  <div className="socialFourmTitle">
                    <div className="enHeader6">2020.</div>
                    <div className="enParagraph">9.30</div>
                  </div>
                  <span className="socialFourmBTitile paragraph1">
                    用可愛的臉騙吃騙喝
                  </span>
                </span>
                <span className="fourmCardBg" />
                <img
                  className="socialFourmCardImg"
                  src="/image/homepage/homepage-1.jpg"
                  object-fit="cover"
                />
                <span className="fourmTypeBox">
                  <div className="container socialFourmType">
                    <div className="row paragraph1 no-gutters">貓 /</div>
                    <div className="row paragraph1 socialSType no-gutters">
                      日常
                    </div>
                  </div>
                  <span className="fourmTypeBg" />
                </span>
              </div>
            </div>
          </div>
          {/* 從首頁拿來的arrow */}
          <span className="container-fluid fourmAllCardArrowItems">
            <img
              className="socialfixArrow-left brownarrow-left"
              src="./icomoon/SVG/_011-brownarrow-left.svg"
              alt=""
            />
            <img
              className="socialfixArrow-right brownarrow-right"
              src="./icomoon/SVG/_012-brownarrow-right.svg"
              alt=""
            />
          </span>
        </div>

        <div className="fourmNewsLineBetween" />
      </div>
      <div className="container fourmSaySomething">
        <h3 className="enHeader2 fourmSayBigText">or -</h3>
        <p className="header5 fourmSaySText">從文章中找到新話題。</p>
      </div>

      <div className="container petknowledgeMain">
        <div className="row socialFourmItems no-gutters">
          <div className="container bigArticleRange">
            <div className="">
              <div className="row petknowledgeTitle">
                <sapn className="fourmTitleLine"></sapn>
                <h3 className="fourm_BTitle">寵物知識</h3>
                <sapn className="fourmTitleLine"></sapn>
              </div>
            </div>
            <div className="bigArticleBox">
              <div className="row bigArticleTitleItems no-gutters">
                <h3 className="enHeader5 bigArticleBTitle">All</h3>
                <p className="header7 bigArticleSTitle">
                  貓咪們都會這樣，你知道嗎？
                </p>
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21.388"
                    height="20.524"
                    viewBox="0 0 21.388 20.524"
                  >
                    <g id="愛心" transform="translate(0.251 0.25)">
                      <path
                        id="Path_1296"
                        data-name="Path 1296"
                        d="M489.508,232.381a4.73,4.73,0,0,0-5.1-3.618c-2.61-.018-5.309,2.627-5.441,6.541-.125,3.664,2.524,8.514,10.189,13.439,7.994-4.816,10.564-9.629,10.689-13.294.133-3.914-2.387-6.595-5-6.613a5.025,5.025,0,0,0-5.341,3.546"
                        transform="translate(-478.964 -228.762)"
                        fill="#fff"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1297"
                        data-name="Path 1297"
                        d="M489.508,232.381a4.73,4.73,0,0,0-5.1-3.618c-2.61-.018-5.309,2.627-5.441,6.541-.125,3.664,2.524,8.514,10.189,13.439,7.994-4.816,10.564-9.629,10.689-13.294.133-3.914-2.387-6.595-5-6.613A5.025,5.025,0,0,0,489.508,232.381Z"
                        transform="translate(-478.964 -228.762)"
                        fill="none"
                        stroke="#ed8f8f"
                        stroke-miterlimit="10"
                        stroke-width="0.5"
                      />
                    </g>
                  </svg>
                </div>
              </div>
              <span className="bigActicleLeftLine"></span>
              <p className="caption bigArticleSText">撰稿人/ bemo機器人</p>
              <div className="row bigArticleContent">
                <img
                  className="bigArticleImg"
                  src="/image/homepage/homepage-1.jpg"
                />
                <div className="bigArticleMain caption">
                  <p>
                    若能夠欣賞到寵物知識的美，相信我們一定會對寵物知識改觀。對於寵物知識，我們不能不去想，卻也不能走火入魔。
                    誇美紐斯講過一段深奧的話，"良好的模範懇切的語言和真誠坦白的同情",
                    是指家長、教師、同學及其他人的示範對兒童的影響。這不禁…
                    若能夠欣賞到寵物知識的美，相信我們一定會對寵物知識改觀。對於寵物知識，我們不能不去想，卻也不能走火入魔。
                    誇美紐斯講過一段深奧的話，"良好的模範懇切的語言和真誠坦白的同情",
                    是指家長、教師、同學及其他人的示範對兒童的影響。這不禁…
                    若能夠欣賞到寵物知識的美，相信我們一定會對寵物知識改觀。
                  </p>
                </div>
              </div>
            </div>
            <div className="petknowledgeRight">
              <div className="petknowledgeType">
                <h3 className="header5">善用分類篩選</h3>
                <div className="petknowledgeSLine" />
                <p className="caption">幫助您找到更多寶貝知識</p>
              </div>
              <div class="allCardBtn_Issue btn-filter">
                <button class="filterbtn">
                  全部 <i class="fas fa-caret-down"></i>
                </button>
                <div class="btn-filter-content">
                  <a href="#">全部</a>
                  <a href="#">貓</a>
                  <a href="#">狗</a>
                </div>
              </div>
            </div>
            <div className="row socialArticleCardItems no-gutters">
              <div className="singleArticleCard">
                <div className="socialArticleCard">
                  <img
                    className="socialArticleCardImg"
                    src="/image/homepage/homepage-1.jpg"
                    object-fit="cover"
                  />
                  <div className="container">
                    <div className="row socialArticleTitle">
                      <span className="socialArticleBT enHeader5">All</span>
                      <span className="socialArticleST header6">
                        貓咪們都會這樣，你知道嗎？
                      </span>
                    </div>
                    <div className="socialArticleContent caption">
                      貓咪們都會這樣，你知道嗎？
                      <br />
                      貓咪們都會這樣，你知道嗎？
                    </div>
                    <a className="socialArticleLink caption">more+</a>
                  </div>
                </div>
              </div>
              <div className="singleArticleCard">
                <div className="socialArticleCard">
                  <img
                    className="socialArticleCardImg"
                    src="/image/homepage/homepage-1.jpg"
                    object-fit="cover"
                  />
                  <div className="container">
                    <div className="row socialArticleTitle">
                      <span className="socialArticleBT enHeader5">All</span>
                      <span className="socialArticleST header6">
                        貓咪們都會這樣，你知道嗎？
                      </span>
                    </div>
                    <div className="socialArticleContent caption">
                      貓咪們都會這樣，你知道嗎？
                      <br />
                      貓咪們都會這樣，你知道嗎？
                    </div>
                    <a className="socialArticleLink caption">more+</a>
                  </div>
                </div>
              </div>
              <div className="singleArticleCard">
                <div className="socialArticleCard">
                  <img
                    className="socialArticleCardImg"
                    src="/image/homepage/homepage-1.jpg"
                    object-fit="cover"
                  />
                  <div className="container">
                    <div className="row socialArticleTitle">
                      <span className="socialArticleBT enHeader5">All</span>
                      <span className="socialArticleST header6">
                        貓咪們都會這樣，你知道嗎？
                      </span>
                    </div>
                    <div className="socialArticleContent caption">
                      貓咪們都會這樣，你知道嗎？
                      <br />
                      貓咪們都會這樣，你知道嗎？
                    </div>
                    <a className="socialArticleLink caption">more+</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className="container-fluid bigArticleArrowItems">
            <img
              class="socialfixArrow-left greenarrow-left"
              src="./icomoon/SVG/_017-greenarrow-left.svg"
              alt=""
            />
            <img
              class="socialfixArrow-right greenarrow-right"
              src="./icomoon/SVG/_018-greenarrow-right.svg"
              alt=""
            />
          </span>
        </div>
      </div>
      <FourmArticlePage />
      <FourmArticleBox />
      <FourmReply />
    </>
  );
}

export default SocialFourm;
