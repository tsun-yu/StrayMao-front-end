import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

function Page1Text2(props) {
  const {} = props
  return (
    <>
      <div className="page1left-2">
        <div className="page1des">
          It's not coincidence about meet our furbaby.
        </div>
        <div className="page1des2 d-flex flex-column justify-content-around">
          <div className="hide">fuck</div>
          <div>與毛孩的相遇，從來都不是巧合。</div>
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

export default withRouter(connect(mapStateToProps, {})(Page1Text2))
