/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

function AdopMainCardPic(props) {
  useEffect(() => {
    console.log('bbb: ', props.info);
  }, [props.info]);
  return (
    <>
      <div className="adoptionMainCardPicture">
        <img
          className=""
          src={
            props.info[props.index] === undefined
              ? '/image/adoption/main-01.jpg'
              : props.info[props.index].pic
          }
        />
        {props.children}
      </div>
    </>
  );
}

const mapStateToProps = (store) => {
  return {};
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {})(AdopMainCardPic);
