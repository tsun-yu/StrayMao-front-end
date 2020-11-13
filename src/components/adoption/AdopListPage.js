/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PageBar from './PageBar';
import AdopListCard from './AdopListCard';
import { gotoPage, setTotalPage } from '../../actions/common/index';
import { getListAsync } from '../../actions/adoption/index';
function AdopListPage(props) {
  const [dataLoading, setDataLoading] = useState(true);
  const [display, setDisplay] = useState(<></>);

  const content = [];
  let totalCards = props.cards;
  let totalPages = Math.ceil(totalCards.length / 9);
  let nowPage = props.nowPage;
  useEffect(() => {
    props.getListAsync();
  }, []);

  useEffect(() => {
    totalCards = props.cards;
    totalPages = Math.ceil(totalCards.length / 9);
    if (totalCards.length > 0) {
      // let tt = JSON.parse(totalCards[0]);
      // console.log("totalCards: ", totalCards[0]);
      // console.log("now ", nowPage);
      // console.log("totalPages ", totalPages);
      // console.log("if:", nowPage === totalPages);
    }
    props.setTotalPage(totalPages);
    for (
      let i = 9 * (nowPage - 1);
      nowPage === totalPages ? i < totalCards.length : i < 9 * nowPage;
      i++
    ) {
      if (totalCards.length > 0) {
        // console.log(":", totalCards[i]);
        content.push(<AdopListCard info={totalCards[i]} key={i} />);
      }
    }
    setDisplay(
      <>
        <div className="container">
          <div className="adopFormTitle header4 my-4">領養列表 </div>
          <div className="adopListContainer align-items-center mt-5 ">
            {/* <h5>{props.totalPage}</h5> */}
            <div className="row my-5 flex-wrap justify-content-between ">
              {content}
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <PageBar />
          </div>
        </div>
      </>
    );

    setTimeout(() => setDataLoading(false), 100);
  }, [totalCards, nowPage]);

  const loading = <div></div>;

  // 以資料載入的指示狀態來切換要出現的畫面
  return dataLoading ? loading : display;
  // return loading;
}

const mapStateToProps = (store) => {
  return {
    nowPage: store.nowPage,
    totalPage: store.totalPage,
    cards: store.adoptReducer.getList,
  };
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {
  gotoPage,
  setTotalPage,
  getListAsync,
})(AdopListPage);
