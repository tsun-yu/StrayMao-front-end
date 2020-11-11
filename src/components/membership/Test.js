import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import MemberInfo from './MemberInfo'
import PasswordChange from './PasswordChange'
import MyComment from './MyComment'
import PetArea from './PetArea'
import MyFavorite from './MyFavorite'
import RegisteredForm from './RegisteredForm'
import SignInForm from './SignInForm'

function Test(props) {
  return (
    <>
      <SignInForm/>
      <RegisteredForm/>
      <MyFavorite/>
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
