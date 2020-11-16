import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import MemberInfo from './MemberInfo'
import PasswordChange from './PasswordChange'
import MyComment from './MyComment'
import PetArea from './PetArea'
import MyFavorite from './MyFavorite'
import RegisteredForm2 from './RegisteredForm2'
import SignInForm from './SignInForm'

function Test(props) {
  return (
    <>
      <SignInForm/>
      <RegisteredForm2/>
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
