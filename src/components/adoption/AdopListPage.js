import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import AdopMainPage from "./AdopMainPage";
import PageBar from "./PageBar";
import AdopListCard from "./AdopListCard";
function AdopListPage(props) {
  return (
    <>
      {/* <AdopMainPage /> */}
      <div className="adopListContainer justify-content-around align-items-center mt-5 ">
        <div className="row my-5 justify-content-around">
          <AdopListCard />
          <AdopListCard />
          <AdopListCard />
        </div>
        <div className="row my-5 justify-content-around">
          <AdopListCard />
          <AdopListCard />
          <AdopListCard />
        </div>
        <div className="row my-5 justify-content-around">
          <AdopListCard />
          <AdopListCard />
          <AdopListCard />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <PageBar />
      </div>
    </>
  );
}

const mapStateToProps = (store) => {
  return {};
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {})(AdopListPage);
