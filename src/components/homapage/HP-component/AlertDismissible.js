import React, { useState, useEffect } from 'react'
import { Alert, Button } from 'react-bootstrap'

function AlertDismissible(props) {
  return (
    <div className="donateSuccess animate__fadeInDown animate__animated ">
      <Alert variant="success" className="text-center">
        <h4>捐款成功</h4>
        <p className="text-center">您的愛心已收到，祝您上廁所都有衛生紙</p>
      </Alert>
    </div>
  )
}

export default AlertDismissible
