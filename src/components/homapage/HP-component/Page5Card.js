import React, { useState, useEffect } from 'react'

function Page5Card(props) {
  return (
    <>
      <div className="page5card">
        <div className=" mx-auto page5cardImg">
          <img class="" src={props.img} />
        </div>
        <div className="page5cardDes mx-auto d-flex">
          <div className="page5cardDate my-auto d-flex flex-column justify-content-center">
            <div className="page5cardYear">2020.</div>
            <div className="page5cardDay text-right">10.10</div>
          </div>
          <div className="page5cardContent my-auto d-flex flex-column justify-content-between">
            <div className="page5cardLabel text-center">日常</div>
            <div className="page5cardTopic text-right">發現我家毛小孩...</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page5Card
