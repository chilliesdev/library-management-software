import React from 'react'
import { Spinner, Card } from 'react-bootstrap'

export default function Loading({ type, color = 'primary'}) {
    
    if (type == 'sm') {
    return <div className="d-flex align-items-center justify-content-center">
        <Spinner animation="border" id="spinner" className={`text-${color}`} role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>
    </div>
    }
    return <div className="loading-overlay">
            <Card id="loading-box">
                <Card.Body className={`d-flex justify-content-center align-items-center`}>
                    <Spinner animation="border"  className={`text-${color}`} id="spinner" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </Card.Body>
            </Card>
        </div>
    
}
