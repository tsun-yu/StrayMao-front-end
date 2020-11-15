import React, { useState, useEffect } from 'react'
import Page3Topic from './Page3Topic'
import { withRouter, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { IoIosArrowDroprightCircle } from 'react-icons/io'

function Page3Ques6(props) {
  const { pet, select } = props
  const postDB = async (select) => {
    const url = 'http://localhost:3001/straymao/homepage/question'
    const data = { arr: select }
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    try {
      const response = await fetch(request)
      const data = await response.json()
      // data會是一個物件值
      await console.log('lll:', data)
    } catch (error) {
      //setError(error)
    }
  }
  return (
    <>
      <div className="page3single ">
        <Page3Topic title="體型" />
        {pet}
      </div>
      <a
        href="##"
        onClick={() => {
          props.history.push('/adoptionmain')
        }}
      >
        <div className="forward position-absolute d-flex flex-column justify-content-center align-items-center forward hvr-bounce-to-right">
          <IoIosArrowDroprightCircle
            size="5rem"
            color=" #cb997e"
            className="forward2"
          />
          <div
            className="forward2adoption"
            onClick={() => {
              postDB(select)
            }}
          >
            開 始 媒 合
          </div>
        </div>
      </a>
    </>
  )
}
const mapStateToProps = (store) => {
  return {}
}
const mapDispatchToProps = null

export default withRouter(connect(mapStateToProps, {})(Page3Ques6))
