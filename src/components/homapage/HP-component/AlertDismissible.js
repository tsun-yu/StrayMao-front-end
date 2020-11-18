import React, { useState, useEffect } from 'react'
import { Alert, Button } from 'react-bootstrap'

function AlertDismissible() {
  const [show, setShow] = useState(true)

  if (show) {
    return (
      <Alert
        className="fsd"
        variant="success"
        onClose={() => setShow(false)}
        dismissible
      >
        <Alert.Heading className="text-center">捐款成功</Alert.Heading>
        <p className="text-center">您的愛心已收到，祝您上廁所都有衛生紙</p>
      </Alert>
    )
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>
}

export default AlertDismissible
