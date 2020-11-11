/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { petDetailId } from '../../actions/adoption/index';
import { withRouter, useHistory } from 'react-router-dom';
function AdopMainReadMore(props) {
  return (
    <>
      <div className="d-flex flex-row mx-auto adoptReadMore ">
        <a
          href="#"
          onClick={() => {
            props.petDetailId(props.info.petId);
            props.history.push('/adoptiondetail');
          }}
        >
          Read More
        </a>
      </div>
    </>
  );
}

const mapStateToProps = (store) => {
  return {
    detailId: store.adoptReducer.petDetailId,
  };
};
const mapDispatchToProps = null;

export default withRouter(
  connect(mapStateToProps, {
    petDetailId,
  })(AdopMainReadMore)
);
