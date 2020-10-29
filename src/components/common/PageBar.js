import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { pervPage, gotoPage, nextPage } from "../../actions/common/index";
import { nowPage } from "../../reducers/common/pageBar";
function PageBar(props) {
  const startPage = props.nowPage - 2 > 0 ? props.nowPage - 2 : -1;
  const endPage = props.nowPage + 2 <= props.totalPage ? props.nowPage + 2 : -1;

  const content = [];
  if (props.totalPage > 5) {
    if (endPage == -1) {
      contentManger(props.totalPage - 4, props.nowPage, 4, content, props);
    } else if (startPage == -1) {
      contentManger(1, props.nowPage, 4, content, props);
    } else {
      contentManger(startPage, props.nowPage, 4, content, props);
    }
  } else {
    contentManger(1, props.nowPage, props.totalPage - 1, content, props);
  }

  //return <div>{items}</div>;

  return (
    <>
      <ul className="pageBar">
        {/* left arrow */}
        {content}
        {/* right arrow */}
      </ul>
    </>
  );
}
const contentManger = (start, nowPage, length, content, props) => {
  content.push(
    nowPage == 1 ? (
      <li key="start">
        <a href="#" onClick={() => {}}></a>
      </li>
    ) : (
      <li key="start">
        <a href="#" onClick={() => props.pervPage()}>
          <i class="fas fa-caret-left fa-1x"></i>
        </a>
      </li>
    )
  );
  for (let i = start; i <= start + length; i++) {
    if (i == nowPage) {
      content.push(
        <li key={i}>
          <a
            href="#"
            className="pageBarActive"
            onClick={() => props.gotoPage(i)}
          >
            <span> {i} </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34.635"
              height="32.394"
              viewBox="0 0 34.635 32.394"
            >
              <g
                id="Group_611"
                data-name="Group 611"
                transform="translate(-705.734 -509.813)"
              >
                <circle
                  id="Ellipse_14"
                  data-name="Ellipse 14"
                  cx="11.34"
                  cy="11.34"
                  r="11.34"
                  transform="translate(712.152 519.526)"
                  fill="#ed8f8f"
                />
                <circle
                  id="Ellipse_15"
                  data-name="Ellipse 15"
                  cx="3.692"
                  cy="3.692"
                  r="3.692"
                  transform="translate(714.789 509.813)"
                  fill="#ed8f8f"
                />
                <circle
                  id="Ellipse_16"
                  data-name="Ellipse 16"
                  cx="3.692"
                  cy="3.692"
                  r="3.692"
                  transform="translate(724.986 509.813)"
                  fill="#ed8f8f"
                />
                <circle
                  id="Ellipse_17"
                  data-name="Ellipse 17"
                  cx="4"
                  cy="4"
                  r="4"
                  transform="translate(705.734 517.197)"
                  fill="#ed8f8f"
                />
                <circle
                  id="Ellipse_18"
                  data-name="Ellipse 18"
                  cx="4"
                  cy="4"
                  r="4"
                  transform="translate(732.37 517.197)"
                  fill="#ed8f8f"
                />
              </g>
            </svg>
          </a>
        </li>
      );
    } else {
      content.push(
        <li key={i}>
          <a href="#" onClick={() => props.gotoPage(i)}>
            <span> {i} </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34.635"
              height="32.394"
              viewBox="0 0 34.635 32.394"
            >
              <g
                id="Group_611"
                data-name="Group 611"
                transform="translate(-705.734 -509.813)"
              >
                <circle
                  id="Ellipse_14"
                  data-name="Ellipse 14"
                  cx="11.34"
                  cy="11.34"
                  r="11.34"
                  transform="translate(712.152 519.526)"
                  fill="#ed8f8f"
                />
                <circle
                  id="Ellipse_15"
                  data-name="Ellipse 15"
                  cx="3.692"
                  cy="3.692"
                  r="3.692"
                  transform="translate(714.789 509.813)"
                  fill="#ed8f8f"
                />
                <circle
                  id="Ellipse_16"
                  data-name="Ellipse 16"
                  cx="3.692"
                  cy="3.692"
                  r="3.692"
                  transform="translate(724.986 509.813)"
                  fill="#ed8f8f"
                />
                <circle
                  id="Ellipse_17"
                  data-name="Ellipse 17"
                  cx="4"
                  cy="4"
                  r="4"
                  transform="translate(705.734 517.197)"
                  fill="#ed8f8f"
                />
                <circle
                  id="Ellipse_18"
                  data-name="Ellipse 18"
                  cx="4"
                  cy="4"
                  r="4"
                  transform="translate(732.37 517.197)"
                  fill="#ed8f8f"
                />
              </g>
            </svg>
          </a>
        </li>
      );
    }
  }
  content.push(
    nowPage == props.totalPage ? (
      <li key="end">
        <a href="#" onClick={() => {}}></a>
      </li>
    ) : (
      <li key="end">
        <a href="#" onClick={() => props.nextPage()}>
          <i class="fas fa-caret-right fa-1x"></i>
        </a>
      </li>
    )
  );
};
const mapStateToProps = (store) => {
  return { nowPage: store.nowPage, totalPage: store.totalPage };
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {
  pervPage,
  gotoPage,
  nextPage,
})(PageBar);
