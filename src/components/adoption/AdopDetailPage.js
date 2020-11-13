/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import AdopMainCardPic from './AdopMainCardPic';
import AdopMainInfo from './AdopMainInfo';
import AdopDetailInfo from './AdopDetailInfo';
import { withRouter, useHistory } from 'react-router-dom';

import {
  getDetailAsync,
  getRecommand,
  getRecommandAsync,
} from '../../actions/adoption/index';
function AdopDetailPage(props) {
  useEffect(() => {
    let id = props.petDetailId ?? 157;
    // console.log("id :", props.petDetailId);
    props.getDetailAsync(id);
    // console.log('aaa: ', props.info);
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    // console.log('aaa: ', props.info);
  }, [props.info]);
  return (
    <>
      <div className="adopRecommand mt-3 mb-4">
        <div className="col p-1">
          <AdopMainCardPic info={props.info} index={0} />
        </div>
        <div className="col">
          <AdopMainInfo info={props.info} index={0} />
        </div>
      </div>
      <AdopDetailInfo info={props.info} />

      <button
        className="btn-green d-flex justify-content-center  align-items-center mx-auto my-3"
        type="button"
        value="123"
        onClick={() => {
          props.history.push('/adoptionform');
        }}
      >
        我要領養
      </button>
    </>
  );
}

const mapStateToProps = (store) => {
  return {
    info: store.adoptReducer.getDetail,
    petDetailId: store.adoptReducer.petDetailId,
  };
};
const mapDispatchToProps = null;

export default withRouter(
  connect(mapStateToProps, {
    getDetailAsync,
    getRecommand,
    getRecommandAsync,
  })(AdopDetailPage)
);
