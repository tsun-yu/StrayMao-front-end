import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

function Page1Text1(props) {
  const {} = props
  return (
    <>
      <div className="page1left-1">
        <div className="page1des">Love them likes family.</div>
        <div className="page1des2 d-flex flex-column justify-content-around">
          <div className="hide">fuck</div>
          <div>給他們一個機會, 擁有一個家。</div>
          <a
            href="##"
            onClick={() => {
              props.history.push('/adoptionmain')
            }}
            className="text-right"
          >
            <div className="page1des3 mr-2 a hvr-underline-from-center">
              >了解更多
            </div>
          </a>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (store) => {
  return {}
}
const mapDispatchToProps = null

export default withRouter(connect(mapStateToProps, {})(Page1Text1))
