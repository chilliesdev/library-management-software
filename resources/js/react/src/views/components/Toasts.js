import React from 'react'
import { Toast } from 'react-bootstrap'

export default function Toasts({ toasts, toggle, title, text, message }) {

  return (
    <Toast show={toasts} onClose={()=>toggle()}>
      <Toast.Header>
        <strong className="mr-auto">{title}</strong>
        <small>{text}</small>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  )
}
