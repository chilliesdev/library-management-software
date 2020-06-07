import React,{useState} from 'react'
import { Alert } from 'react-bootstrap'

export default function Alerts({ message, variant }) {
    const messages = message

    return (
        messages.map( (messages,Index) => 
            <Alert key={Index} variant={variant}>
                {messages}
            </Alert>
        )
    )
}
