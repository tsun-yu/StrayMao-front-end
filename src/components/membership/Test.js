import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import MemberInfo from './MemberInfo'
import PasswordChange from './PasswordChange'
import MyComment from './MyComment'
import PetArea from './PetArea'

function Test(props) {
  return (
    <>
      <PetArea/>
      <MyComment/>
      <PasswordChange/>
      <MemberInfo/>
    </>
  );
}

const mapStateToProps = (store) => {
  return {};
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {})(Test);
