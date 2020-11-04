import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PageBar from "./PageBar";
import AdopListCard from "./AdopListCard";
import { gotoPage, setTotalPage } from "../../actions/common/index";
function AdopListPage(props) {
  const [totalCards, setTotalCards] = useState(10);
  useEffect(() => {
    // props.getListAsync();
    // props.setTotalPage(10);
    setTimeout(() => {
      setTotalCards(100);
    }, 3000);
    return () => {
      // props.gotoPage(1);
    };
  }, []);
  let totalPages = Math.ceil(totalCards / 9);
  props.setTotalPage(totalPages);
  let nowPage = props.nowPage;
  const content = [];
  for (
    let i = 9 * (nowPage - 1);
    nowPage === totalPages ? i < totalCards : i < 9 * nowPage;
    i++
  ) {
    content.push(<AdopListCard info={i} key={i} />);
  }
  return (
    <>
      <div className="adopListContainer justify-content-around align-items-center mt-5 ">
        {/* <h5>{props.totalPage}</h5> */}
        <div className="row my-5 justify-content-around flex-wrap">
          {content}
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <PageBar />
      </div>
    </>
  );
}

const mapStateToProps = (store) => {
  return { nowPage: store.nowPage, totalPage: store.totalPage };
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, { gotoPage, setTotalPage })(
  AdopListPage
);
