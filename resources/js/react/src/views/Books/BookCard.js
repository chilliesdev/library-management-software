import React from 'react'
import Loading from '../components/Loading'
import { Link } from 'react-router-dom'
import { Row, Col, Card, CardBody, CardHeader, Button } from 'reactstrap'

export default function BookCard({ book, customClassName = null,getBook }){
	const {
		id,
		name,
		author,
		cover,
	} = book
	const bookLink = `/books/${id}`
	const coverStyle = {
		'background': `url(/storage/book_cover/${cover}) rgba(0,0,0,0.3)`,
		'backgroundSize': 'cover',
		'backgroundBlendMode': 'multiply',
		'color': 'white',
		'height': '30vh',
	}

	return (
		<div className={ customClassName ? customClassName : 'co-lg-3 col-md-4 col-sm-12' }>
			<Card style={coverStyle}>
				<CardBody className="d-flex flex-column justify-content-start">
          {getBook ? <Link 
            className="book-link h4 text-light text-capitalize mr-auto" 
            onClick={e => {
                e.preventDefault()
                getBook(id)
              }
            } 
            to={bookLink}>{name}</Link>
          :<Link 
            className="book-link h4 text-light text-capitalize mr-auto" 
            to={bookLink}>{name}</Link> 
          }
					<p className="lead text-capitalize mr-auto">{author}</p>
				</CardBody>
			</Card> 
		</div>
	)
}