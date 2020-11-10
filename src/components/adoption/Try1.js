import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

function Try1(props) {
  return (
    <>
      <h3>{props.detail}</h3>
      <h3>{JSON.stringify(props.kind)}</h3>
    </>
  );
}

const mapStateToProps = (store) => {
  return {};
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {})(Try1);
